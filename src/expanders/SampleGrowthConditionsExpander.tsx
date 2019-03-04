import * as React from "react";

import { IExpander } from "./AbstractExpander";

export class SampleGrowthConditionsExpander implements IExpander {
  public fk = "sample_preparation_label";
  private foreignTable = "sample_preparation";
  private labelField = "sample_preparation_method";
  private schema: any;
  private lookup: any[];

  constructor(schema: any, data: any) {
    this.schema =
      schema.properties.experimental.properties[
        this.foreignTable
      ].items.properties;
    this.lookup = data.experimental[this.foreignTable];
  }

  public ths(offset: number) {
    return this.headers().map((s, i) => <th key={i + offset}>{s}</th>);
  }

  public tds(row: any, offset: number) {
    const foreignItem = this.find(row);
    const foreignCols = this.htmlCols(foreignItem);
    return foreignCols.map((td, tdi) => {
      return <td key={tdi + offset}>{td}</td>;
    });
  }

  public headers() {
    // TODO split medium type and medium label
    return Object.keys(this.schema).map(k => this.schema[k].title);
  }

  public textCols(row: any) {
    const foreignItem = this.find(row);
    return this.textColsOf(foreignItem);
  }

  private textColsOf(row: any) {
    const mediumKey = "medium_details";
    const mediumSchema = this.schema[mediumKey].properties.medium;
    const envKey = "metagenome_details";
    const envSchema = this.schema[envKey].properties.environment;
    return Object.keys(this.schema).map(k => {
      const v = row[k];
      if (k === mediumKey) {
        const mediumLabel = mediumSchema.anyOf.find(
          (r: any) => r.enum[0] === v.medium
        ).title;
        if (v.medium === "other") {
          return `${v.Other_medium} (${v.medium_type})`;
        } else {
          return `${mediumLabel} (${v.medium_type})`;
        }
      } else if (k === envKey) {
        if (!v.environment) {
          return undefined;
        }
        const envLabel = envSchema.anyOf.find(
          (r: any) => r.enum[0] === v.environment
        ).title;
        if (v.environment === "other") {
          return v.Other_environment;
        } else {
          return envLabel;
        }
      }
      return v;
    });
  }

  private htmlCols(row: any) {
    const mediumKey = "medium_details";
    const mediumSchema = this.schema[mediumKey].properties.medium;
    const envKey = "metagenome_details";
    const envSchema = this.schema[envKey].properties.environment;
    return Object.keys(this.schema).map(k => {
      const v = row[k];
      if (k === mediumKey) {
        const mediumLabel = mediumSchema.anyOf.find(
          (r: any) => r.enum[0] === v.medium
        ).title;
        if (v.medium === "other") {
          return (
            <span>
              {v.Other_medium} ({v.medium_type})
            </span>
          );
        } else {
          return (
            <a key={v.medium} href={v.medium}>
              {mediumLabel} ({v.medium_type})
            </a>
          );
        }
      } else if (k === envKey) {
        if (!v.environment) {
          return undefined;
        }
        const envLabel = envSchema.anyOf.find(
          (r: any) => r.enum[0] === v.environment
        ).title;
        if (v.environment === "other") {
          return v.Other_environment;
        } else {
          return (
            <a key={v} href={v}>
              {envLabel}
            </a>
          );
        }
      }
      return v;
    });
  }

  private find(row: any) {
    const label = row[this.fk];
    return this.lookup.find((r: any) => r[this.labelField] === label);
  }
}