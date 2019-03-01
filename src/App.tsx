import * as React from "react";

import { JSONSchema6 } from "json-schema";
import { Button, ButtonGroup, Glyphicon } from "react-bootstrap";
import Form, { ISubmitEvent } from "react-jsonschema-form";
import CollapsibleField from "react-jsonschema-form-extras/lib/CollapsibleField";

import { ForeignKeyField } from "./ForeignKeyField";
import { GenomeMetabolomeLinksField } from './GenomeMetabolomeLinksField';
import { PairedDataRecord } from "./PairedDataRecord";

import "./App.css";
import { jsonDocument } from './textTable';

interface IState {
  schema: JSONSchema6;
  uiSchema: any;
  formData: object;
}

const formFields = {
  collapsible: CollapsibleField,
  foreignKey: ForeignKeyField,
  gmarray: GenomeMetabolomeLinksField,
};

class App extends React.Component<{}, IState> {
  public state: IState = { schema: {}, uiSchema: {}, formData: {} };
  public rawFormData: any = {};
  private uploadRef: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.uploadRef = React.createRef();
  }

  public componentDidMount() {
    fetch("schema.json")
      .then(r => r.json())
      .then(schema => this.setState({ schema }));
    fetch("uischema.json")
      .then(r => r.json())
      .then(uiSchema => {
        // inject foreign key search method
        uiSchema.genome_metabolome_links.items.genome_ID.foreignKey.search = this.searchLabels.bind(
          this
        );
        uiSchema.genome_metabolome_links.items.sample_preparation_label.foreignKey.search = this.searchLabels.bind(
          this
        );
        uiSchema.genome_metabolome_links.items.extraction_method_label.foreignKey.search = this.searchLabels.bind(
          this
        );
        uiSchema.genome_metabolome_links.items.instrumentation_method_label.foreignKey.search = this.searchLabels.bind(
          this
        );
        uiSchema.BGC_MS2_links.items.MS2_URL.foreignKey.search = this.searchLabels.bind(
          this
        );
        this.setState({ uiSchema });
      });
  }

  public searchLabels = (url: string) => {
    if (url === "genome_ID") {
      if (!this.rawFormData.genomes) {
        return [];
      }

      const labels = this.rawFormData.genomes.map(
        (r: any) =>
          r.genome_ID.GenBank_accession ||
          r.genome_ID.RefSeq_accession ||
          r.genome_ID.ENA_NCBI_accession ||
          r.genome_ID.MGnify_accession ||
          r.BioSample_accession
      );
      return labels;
    } else if (url === "sample_preparation_label") {
      if (
        !this.rawFormData.experimental.sample_preparation
      ) {
        return [];
      }

      const labels = this.rawFormData.experimental.sample_preparation.map(
        (r: any) => r.sample_preparation_method
      );
      return labels;
    } else if (url === "extraction_method_label") {
      if (
        !this.rawFormData.experimental.extraction_methods
      ) {
        return [];
      }

      const labels = this.rawFormData.experimental.extraction_methods.map((r: any) => r.extraction_method);
      return labels;
    } else if (url === "instrumentation_method_label") {
      if (
        this.rawFormData.experimental.instrumentation_methods === undefined
      ) {
        return [];
      }

      const labels = this.rawFormData.experimental.instrumentation_methods.map((r: any) => r.instrumentation_method);
      return labels;
    } else if (url === 'MS2_URL') {
      if (!this.rawFormData.genome_metabolome_links) {
        return [];
      }
      const labels = this.rawFormData.genome_metabolome_links.map((r: any) => r.metabolomics_file);
      return labels;
    }
    throw new Error("Unknown link");
  };

  public onSubmit = ({ formData }: ISubmitEvent<object>) => {
    this.setState({ formData });
  };

  public onReset = () => {
    this.setState({ formData: {} });
  }

  public onFormChange = ({ formData }: ISubmitEvent<object>) => {
    this.rawFormData = formData;
  };

  public uploadGenomeMetabolomeLinks = (rows: any[]) => {
    const doc = jsonDocument(this.state.schema, rows);
    const formData: any = this.state.formData;
    formData.genomes = doc.genomes;
    formData.experimental = doc.experimental;
    formData.genome_metabolome_links = doc.genome_metabolome_links;
    if (!formData.personal) {
      formData.personal = {
        PI_email: undefined,
        PI_institution: undefined,
        PI_name: undefined,
        submitter_email: undefined,
        submitter_institution: undefined,
        submitter_name: undefined,
      };
    }
    if (!formData.metabolomics) {
      formData.metabolomics = {
        GNPSMassIVE_ID: undefined,
        MaSSIVE_URL: undefined
      }
    }
    this.setState({ formData });
  }

  public render() {
    const formContext = {
      uploadGenomeMetabolomeLinks: this.uploadGenomeMetabolomeLinks
    };
    return (
      <div className="App">
        {Object.keys(this.state.schema).length > 0 &&
          Object.keys(this.state.uiSchema).length > 0 && (
            <Form
              schema={this.state.schema}
              uiSchema={this.state.uiSchema}
              fields={formFields}
              formData={this.state.formData}
              onSubmit={this.onSubmit}
              onChange={this.onFormChange}
              validate={this.validate}
              formContext={formContext}
            >
              <ButtonGroup>
                <Button onClick={this.onUpload} title="Upload JSON file">
                  <Glyphicon glyph="upload" /> Upload
                  <input
                    type="file"
                    accept="application/json,.json"
                    onChange={this.fillFormFromFile}
                    ref={this.uploadRef}
                    style={{ display: "none" }}
                  />
                </Button>
                <Button type="submit" bsStyle="primary">
                  <Glyphicon glyph="ok" /> Save
                </Button>
                <Button type="reset" onClick={this.onReset}>
                  <Glyphicon glyph="remove" /> Reset
                </Button>
              </ButtonGroup>
            </Form>
          )}
        {Object.keys(this.state.formData).length > 0 && (
          <PairedDataRecord
            data={this.state.formData}
            schema={this.state.schema}
          />
        )}
      </div>
    );
  }

  public onUpload = () => {
    if (this.uploadRef.current) {
      this.uploadRef.current.click();
    }
  };

  public fillFormFromFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = evt => {
      if (reader.result) {
        const formData = JSON.parse(reader.result as string);
        this.setState({ formData });
      }
    };
    reader.readAsText(file);
  };

  public validate = (formData: any, errors: any) => {
    if (formData.experimental.extraction_methods) {
      formData.experimental.extraction_methods.forEach((e: any, i: number) => {
        const ratioTotal = e.solvents.reduce((c: number, s: any) => {
          return s.ratio + c;
        }, 0);
        if (ratioTotal > 1) {
          errors.experimental.extraction_methods[i].solvents.addError(
            'Combined ratio not within 0 and 1'
          );
        }
      });
    }
    if (!formData.genome_metabolome_links) {
      return errors;
    }
    const gmIds = this.searchLabels("genome_ID");
    const spIds = this.searchLabels("sample_preparation_label");
    const emIds = this.searchLabels("extraction_method_label");
    const imIds = this.searchLabels("instrumentation_method_label");
    formData.genome_metabolome_links.forEach(
      (genomeMetabolomeLink: any, i: number) => {
        if (
          genomeMetabolomeLink.genome_ID &&
          !gmIds.includes(genomeMetabolomeLink.genome_ID)
        ) {
          errors.genome_metabolome_links[i].genome_ID.addError(
            "Invalid selection"
          );
        }
        if (
          genomeMetabolomeLink.sample_preparation_label &&
          !spIds.includes(genomeMetabolomeLink.sample_preparation_label)
        ) {
          errors.genome_metabolome_links[i].sample_preparation_label.addError(
            "Invalid selection"
          );
        }
        if (
          genomeMetabolomeLink.extraction_method_label &&
          !emIds.includes(genomeMetabolomeLink.extraction_method_label)
        ) {
          errors.genome_metabolome_links[i].extraction_method_label.addError(
            "Invalid selection"
          );
        }
        if (
          genomeMetabolomeLink.instrumentation_method_label &&
          !imIds.includes(genomeMetabolomeLink.instrumentation_method_label)
        ) {
          errors.genome_metabolome_links[
            i
          ].instrumentation_method_label.addError("Invalid selection");
        }
      }
    );
    if (formData.BGC_MS2_links) {
      const msUrls = this.searchLabels("MS2_URL");
      formData.BGC_MS2_links.forEach((geneSpectraLink: any, i: number) => {
        if (geneSpectraLink.MS2_URL && !msUrls.includes(geneSpectraLink.MS2_URL)) {
          errors.BGC_MS2_links[i].MS2_URL.addError("Invalid selection");
        }
      });
    }
    return errors;
  };
}

export default App;
