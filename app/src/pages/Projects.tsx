import * as React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useProjects } from "../api";

export function Projects() {
    const projects = useProjects();
    if (projects.loading) {
        return <span>Loading ...</span>;
    }
    if (projects.error) {
        return <span>Error: {projects.error}</span>
    }
    const rows = projects.data.map(d => (
        <tr key={d._id}>
            <td><Link to={`/projects/${d._id}`}>{d.GNPSMassIVE_ID}</Link></td>
            <td>{d.PI_name}</td>
            <td>{d.nr_genomes}</td>
            <td>{d.nr_growth_conditions}</td>
            <td>{d.nr_extraction_methods}</td>
            <td>{d.nr_instrumentation_methods}</td>
            <td>{d.nr_genome_metabolmics_links}</td>
            <td>{d.nr_genecluster_mspectra_links}</td>
        </tr>
    ));
    return (
        <div>
            <h1>List page with all approved datasets, search functionality</h1>
            <Table>
                <thead>
                    <tr>
                        <th>GNPS Massive identifier</th>
                        <th>Principal investigator</th>
                        <th>Nr of (meta)genomes</th>
                        <th>Nr of growth conditions</th>
                        <th>Nr of extraction methods</th>
                        <th>Nr of instrumention methods</th>
                        <th>Nr of links between genomes and metabolomics</th>
                        <th>Nr of links between gene clusters and MS2 spectra</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </div>
    );
}