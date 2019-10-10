import * as React from "react";

import { Table, Button, Popover, OverlayTrigger, Glyphicon } from 'react-bootstrap';

import { tsvUrl } from './textTable';
import { IOMEGAPairedDataPlatform } from "./schema";
import { Publications } from "./Publications";

import './GenomeMetabolomicsTable.css';

interface IProps {
    data: any;
    schema: any;
}

export const GenomeMetabolomicsTable = (props: IProps) => {
    const pure_project: IOMEGAPairedDataPlatform = props.data.project;
    if (!pure_project.genome_metabolome_links || pure_project.genome_metabolome_links.length === 0) {
        return <p>No links between (meta)genomes and metabolimics data files.</p>;
    }
    const genome_enrichments = props.data.enrichments && props.data.enrichments.genomes ? props.data.enrichments.genomes : {};
    const gmProps = props.schema.properties.genome_metabolome_links.items.properties;
    const cols = Object.keys(gmProps);

    let headers = cols.map((s) => {
        const field = gmProps[s];
        return <th key={s}>{field.title}</th>;
    });
    const genomemetabolometsvfn = 'paired-' + props.data._id + '-genome-metabolome.tsv';

    const genome_popovers: any = {};
    pure_project.genomes.forEach((g) => {
        let species = <></>;
        const s = genome_enrichments[g.genome_label];
        if (s) {
            const tax_url = 'http://purl.bioontology.org/ontology/NCBITAXON/' + s.species.tax_id;
            species = <a href={tax_url}>{s.species.scientific_name}</a>;
        }
        const bs_url = `https://www.ncbi.nlm.nih.gov/biosample/{g.BioSample_accession}`;
        if (g.genome_ID.genome_type === 'metagenome') {
            const ena_url = `https://www.ebi.ac.uk/ena/browser/view/{g.genome_ID.ENA_NCBI_accession}`;
            const mgnify_url = `https://www.ebi.ac.uk/metagenomics/studies/{g.genome_ID.MGnify_accession}`;
            const popover = (
                <Popover id={g.genome_label} title="Metagenome">
                    <p>ENA/NCBI accession number: <a href={ena_url}>{g.genome_ID.ENA_NCBI_accession}</a></p>
                    <p>MGnify accession number: <a href={mgnify_url}>{g.genome_ID.MGnify_accession}</a></p>
                    <p>Biosample: <a href={bs_url}>{g.BioSample_accession}</a></p>
                    <p>Key publications: <Publications publications={g.publications!} /></p>
                    <p>Species: {species}</p>
                </Popover>
            );
            genome_popovers[g.genome_label] = popover;
        } else {
            const gb_url = `https://www.ncbi.nlm.nih.gov/nuccore/{g.genome_ID.GenBank_accession}`;
            const rs_url = `https://www.ncbi.nlm.nih.gov/nuccore/{g.genome_ID.RefSeq_accession}`;
            const popover = (
                <Popover id={g.genome_label} title="Genome or metagenome-assembled genome">
                    <p>GenBank: <a href={gb_url}>{g.genome_ID.GenBank_accession}</a></p>
                    <p>RefSeq: <a href={rs_url}>{g.genome_ID.RefSeq_accession}</a></p>
                    <p>Biosample: <a href={bs_url}>{g.BioSample_accession}</a></p>
                    <p>Key publications: <Publications publications={g.publications!} /></p>
                    <p>Species: {species}</p>
                </Popover>
            );
            genome_popovers[g.genome_label] = popover;
        }
    });

    const sample_popovers: any = {};
    pure_project.experimental.sample_preparation!.forEach((s) => {
        let environment = <></>;
        if (s.metagenome_details!.environment === 'other') {
            environment = s.metagenome_details!.Other_environment;
        } else if (s.metagenome_details!.environment) {
            const any_env = props.schema.properties.experimental.properties.sample_preparation.items.properties.metagenome_details.properties.environment.anyOf;
            const env_title = any_env.find((r: any) => r.enum[0] === s.metagenome_details!.environment).title;
            environment = <a href={s.metagenome_details!.environment}>{env_title}</a>;
        }
        const metagenome = (
            <>
                <h4>Metagenome details</h4>
                <p>Host or isolation source: {environment}</p>
                <p>Sample description: {s.metagenomic_sample_description}</p>
            </>
        );
        let medium = <></>;
        if (s.medium_details!.medium === 'other') {
            medium = s.medium_details!.Other_medium;
        } else {
            const any_medium = props.schema.properties.experimental.properties.sample_preparation.items.properties.medium_details.properties.medium.anyOf;
            const medium_title = any_medium.find((r: any) => r.enum[0] === s.medium_details!.medium).title;
            medium = <a href={s.medium_details!.medium}>{medium_title}</a>
        }
        const popover = (
            <Popover id={s.sample_preparation_method} title="Sample growth conditions">
                <p>Medium type: {s.medium_details!.medium_type}</p>
                <p>Growth mediun: {medium}</p>
                <p>Growth temperature (&deg;C): {s.growth_temperature}</p>
                <p>Aeration: {s.aeration}</p>
                <p>Growth time (hours): {s.growing_time}</p>
                <p>Growth phase or OD: {s.growth_phase_OD}</p>
                <p>Other conditions: {s.other_growth_conditions}</p>
                {s.metagenome_details!.environment || s.metagenomic_sample_description ? metagenome : <></>}
            </Popover>
        );
        sample_popovers[s.sample_preparation_method] = popover;
    });

    const extraction_popovers: any = {};
    pure_project.experimental.extraction_methods!.forEach((e) => {
        let solvent_table = <></>;
        const any_solvent = props.schema.properties.experimental.properties.extraction_methods.items.properties.solvents.items.properties.solvent.anyOf;
        if (e.solvents!.length === 1 && e.solvents![0].ratio === 1) {
            const s = e.solvents![0];
            const solvent_title = any_solvent.find((r: any) => s.solvent === r.enum[0]).title;
            solvent_table = <p>Solvent: <a href={s.solvent}>{solvent_title}</a></p>
        } else {
            const solvents = e.solvents!.map(s => {
                let solvent = <></>;
                if (s.solvent === 'https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:46787') {
                    solvent = s.Other_solvent;
                } else {
                    const solvent_title = any_solvent.find((r: any) => s.solvent === r.enum[0]).title;
                    solvent = <a href={s.solvent}>{solvent_title}</a>;
                }
                return (
                    <tr key={s.solvent!}>
                        <td>{solvent}</td>
                        <td>{s.ratio}</td>
                    </tr>
                );
            });
            solvent_table = (
                <Table condensed={true} striped={true} bordered={true}>
                    <thead>
                        <tr>
                            <th>Solvent</th>
                            <th>Ratio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {solvents}
                    </tbody>
                </Table>
            );
        }

        const popover = (
            <Popover id={e.extraction_method} title="Extraction method">
                {solvent_table}
                <p>Other extraction details: {e.other_extraction_parameters}</p>
            </Popover>
        );
        extraction_popovers[e.extraction_method] = popover;
    });

    const instrument_popovers: any = {};
    pure_project.experimental.instrumentation_methods!.forEach(i => {
        const any_instrument = props.schema.properties.experimental.properties.instrumentation_methods.items.properties.instrumentation.properties.instrument.anyOf;
        let instrument = <></>;
        if (i.instrumentation!.instrument === 'https://bioportal.bioontology.org/ontologies/MS/?p=classes&conceptid=http%3A%2F%2Fpurl.obolibrary.org%2Fobo%2FMS_1000443') {
            instrument = i.instrumentation!.other_instrument;
        } else {
            const instrument_title = any_instrument.find((r: any) => r.enum[0] === i.instrumentation!.instrument).title;
            instrument = <a href={i.instrumentation!.instrument}>{instrument_title}</a>;
        }
        const any_mode = props.schema.properties.experimental.properties.instrumentation_methods.items.properties.mode.anyOf;
        const mode_title = any_mode.find((r: any) => r.enum[0] === i.mode).title;
        const popover = (
            <Popover id={i.instrumentation_method} title="Instrumentation method">
                <p>Type: {instrument}</p>
                <p>Column: {i.column}</p>
                <p>Mode: <a href={i.mode}>{mode_title}</a></p>
                <p>Mass range (Da): {i.range}</p>
                <p>Collision energy: {i.collision_energy}</p>
                <p>Buffering: {i.buffering}</p>
                <p>Other: {i.other_instrumentation}</p>
            </Popover>
        );
        instrument_popovers[i.instrumentation_method] = popover;
    });

    const rows = pure_project.genome_metabolome_links.map((r) => (
        <tr key={r.metabolomics_file}>
            <td>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    overlay={genome_popovers[r.genome_label]}
                >
                    <Button bsStyle="link">
                        {r.genome_label}
                    </Button>
                </OverlayTrigger>
            </td>
            <td>{r.metabolomics_file}<Button bsStyle="link" href={r.metabolomics_file}><Glyphicon style={{color:"gray"}} glyph="download-alt"/></Button></td>
            <td>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    overlay={sample_popovers[r.sample_preparation_label]}
                >
                    <Button bsStyle="link">
                        {r.sample_preparation_label}
                    </Button>
                </OverlayTrigger>
            </td>
            <td>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    overlay={extraction_popovers[r.extraction_method_label]}
                >
                    <Button bsStyle="link">
                        {r.extraction_method_label}
                    </Button>
                </OverlayTrigger>
            </td>
            <td>
                <OverlayTrigger
                    trigger="click"
                    rootClose
                    placement="bottom"
                    overlay={instrument_popovers[r.instrumentation_method_label]}
                >
                    <Button bsStyle="link">
                        {r.instrumentation_method_label}
                    </Button>
                </OverlayTrigger>
            </td>
        </tr>
    ));

    return (
        <>
            <Table condensed={true} striped={true} bordered={true}>
                <thead>
                    <tr>
                        {headers}
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>

            <a href={tsvUrl(props.schema, pure_project)} download={genomemetabolometsvfn}>tab delimited downoad</a>
        </>
    );
}