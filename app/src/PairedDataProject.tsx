import * as React from "react";

import { Button, Glyphicon } from "react-bootstrap";

import { GeneSpectraTable } from "./GeneSpectraTable";
import { GenomeMetabolomicsTable } from "./GenomeMetabolomicsTable";
import { EnrichedProjectDocument } from "./summarize";

interface IProps {
  project: EnrichedProjectDocument;
  schema: any;
}

function record2dataUrl(data: object, mimeType = "application/json") {
  const bj = btoa(JSON.stringify(data, null, 4));
  return `data:${mimeType};base64,${bj}`;
}

export const PairedDataProject = ({project, schema}: IProps) => {
    const pure_project = project.project;
    const dataUrl = record2dataUrl(pure_project);
    const filename = `paired_datarecord_${project._id}.json`;
    return (
        <div>
            <h3>iOMEGA Paired data project:</h3>
            <Button href={dataUrl} download={filename}><Glyphicon glyph="download" /> Download</Button>
            <h2>Submitter Information</h2>
            <ul>
                <li>Submitter: <a href={"mailto:" + pure_project.personal.submitter_email}>{pure_project.personal.submitter_name}</a> of {pure_project.personal.submitter_institution}</li>
                <li>Principal investigator: <a href={"mailto:" + pure_project.personal.PI_email}>{pure_project.personal.PI_name}</a> of {pure_project.personal.PI_institution}</li>
            </ul>
            <h2>Metabolomics project details</h2>
            <ul>
                <li>GNPS-MassIVE identifier: <a href={pure_project.metabolomics.MaSSIVE_URL}>{pure_project.metabolomics.GNPSMassIVE_ID}</a></li>
                <li>Publications: {pure_project.metabolomics.publications}</li>
                <li>Molecular Network Task ID: {pure_project.metabolomics.molecular_network}</li>
            </ul>

            <h2>Links between genomes and metabolomics data</h2>
            <GenomeMetabolomicsTable data={project} schema={schema} />

            <h2>Linked gene clusters and MS2 spectra</h2>
            <GeneSpectraTable data={project} schema={schema} />
        </div>
    );
};