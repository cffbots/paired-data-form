(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,n){e.exports=n(314)},310:function(e,t,n){},311:function(e,t,n){},314:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(35),o=n.n(i),l=n(12),s=n(13),m=n(58),c=n(55),u=n(59),h=n(317),p=n(318),f=n(152),d=n(315),v=n(138),_=n.n(v),b=n(139),k=n.n(b),g=n(153),y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(a)))).state={open:!1,options:[]},n.handleChange=function(e){n.props.onChange(e.value)},n.loadOptions=function(){return n.props.uiSchema.foreignKey.search(n.props.name).map(function(e){return{value:e,label:e}})},n.onOpen=function(){var e=n.loadOptions();n.setState({open:!0,options:e})},n.onClose=function(e){var t=e.value;n.setState({value:t,open:!1,options:[]},function(){n.props.onChange(t)})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.createElement("span",{className:"form-control",onClick:this.onOpen},this.props.formData||"Click to select",r.createElement("span",{className:"pull-right"},r.createElement(d.a,{glyph:"chevron-down"})));return this.state.open&&this.state.options.length>0&&(e=r.createElement(g.a,{defaultValue:this.props.formData,onChange:this.onClose,options:this.state.options,menuIsOpen:!0})),r.createElement("div",null,r.createElement("label",null,this.props.schema.title),r.createElement("p",null,this.props.schema.description),e)}}]),t}(r.Component),E=n(149),O=n(92),x=n.n(O),S=n(316);function j(e,t,n){var a=new Map;return e.dependencies[t].oneOf.forEach(function(e){Object.keys(e.properties).filter(function(e){return e!==t}).forEach(function(t){a.set(t,r.createElement("th",{key:n+a.size},e.properties[t].title))})}),a}var w=function(e){if(!e.data.BGC_MS2_links)return r.createElement("p",null,"No links between gene clusters and MS2 spectra.");var t=e.schema.properties.BGC_MS2_links.items,n=t.properties,a=Object.keys(n).filter(function(e){return"link"!==e&&"BGC_ID"!==e}),i=[];a.forEach(function(e,t){var a=n[e];a.title?i.push(r.createElement("th",{key:t},a.title)):i.push(r.createElement("th",{key:t},e))});var o=j(t.properties.BGC_ID,"BGC",i.length),l=Array.from(o.keys()),s=j(t,"link",(i=i.concat(Array.from(o.values()))).length),m=Array.from(s.keys());i=i.concat(Array.from(s.values()));var c=e.data.BGC_MS2_links.map(function(e,t){var n=a.map(function(t,n){return"verification"===t?r.createElement("td",{key:n},e[t].join(";")):r.createElement("td",{key:n},e[t])}),i=l.map(function(t,a){return r.createElement("td",{key:n.length+a},e.BGC_ID[t])});n=n.concat(i);var o=m.map(function(t,a){return r.createElement("td",{key:n.length+a},e[t])});return n=n.concat(o),r.createElement("tr",{key:t},n)});return r.createElement(S.a,{condensed:!0,striped:!0,bordered:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("td",{colSpan:a.length}),r.createElement("td",{colSpan:l.length},n.BGC_ID.title),r.createElement("td",{colSpan:m.length},n.link.title)),r.createElement("tr",null,i)),r.createElement("tbody",null,c))},C=n(57),D=function(){function e(t,n){Object(l.a)(this,e),this.fk="extraction_method_label",this.foreignTable="extraction_methods",this.labelField="extraction_method",this.schema=void 0,this.lookup=void 0,this.schema=t.properties.experimental.properties[this.foreignTable].items.properties,this.lookup=n.experimental[this.foreignTable]}return Object(s.a)(e,[{key:"ths",value:function(e){return this.headers().map(function(t,n){return r.createElement("th",{key:n+e},t)})}},{key:"tds",value:function(e,t){var n=this.find(e);return this.cols(n).map(function(e,n){return r.createElement("td",{key:n+t},e)})}},{key:"headers",value:function(){var e=this;return Object.keys(this.schema).map(function(t){return e.schema[t].title})}},{key:"textCols",value:function(e){var t=this.find(e);return this.textColsOf(t)}},{key:"textColsOf",value:function(e){var t=this.schema.solvents.items.properties.solvent;return Object.keys(this.schema).map(function(n){var r=e[n];return"solvents"===n?r.map(function(e,n){var r=t.anyOf.find(function(t){return t.enum[0]===e.solvent}).title;return"Other solvent"===r?"".concat(e.Other_solvent,"=").concat(e.ratio):"".concat(r,"=").concat(e.ratio)}).join(";"):r})}},{key:"cols",value:function(e){var t=this.schema.solvents.items.properties.solvent;return Object.keys(this.schema).map(function(n){var a=e[n];return"solvents"===n?a.map(function(e,n){var i=t.anyOf.find(function(t){return t.enum[0]===e.solvent}).title,o=";";return a.length-1===n&&(o=""),"Other solvent"===i?r.createElement("span",{key:e.Other_solvent},e.Other_solvent,"=",e.ratio,o):r.createElement("span",{key:e.solvent},r.createElement("a",{href:e.solvent},i),"=",e.ratio,o)}):a})}},{key:"find",value:function(e){var t=this,n=e[this.fk];return this.lookup.find(function(e){return e[t.labelField]===n})}}]),e}(),I=function(){function e(t,n){Object(l.a)(this,e),this.fk="genome_label",this.foreignTable="genomes",this.labelField="genome_label",this.schema=void 0,this.lookup=void 0,this.schema=t.properties[this.foreignTable].items.properties,this.lookup=n[this.foreignTable]}return Object(s.a)(e,[{key:"ths",value:function(e){return this.headers().map(function(t,n){return r.createElement("th",{key:n+e},t)})}},{key:"tds",value:function(e,t){var n=this.find(e);return this.cols(n).map(function(e,n){return r.createElement("td",{key:n+t},e)})}},{key:"headers",value:function(){var e=this,t=this.schema.genome_ID.dependencies.genome_type.oneOf,n=[];t.forEach(function(t){Object.keys(t.properties).forEach(function(r){"genome_type"===r?-1===n.indexOf(e.schema.genome_ID.title)&&n.push(e.schema.genome_ID.title):-1===n.indexOf(t.properties[r].title)&&n.push(t.properties[r].title)})});var r=Object.keys(this.schema).filter(function(e){return"genome_ID"!==e}).map(function(t){return e.schema[t].title});return n.concat(r)}},{key:"textCols",value:function(e){var t=this.find(e);return this.cols(t)}},{key:"cols",value:function(e){var t=this.schema.genome_ID.dependencies.genome_type.oneOf,n=[],r=[];t.forEach(function(t){Object.keys(t.properties).forEach(function(t){"genome_type"===t?-1===n.indexOf("genome_ID")&&(n.push("genome_ID"),r.push(e.genome_ID[t])):-1===n.indexOf(t)&&(n.push(t),r.push(e.genome_ID[t]))})});var a=Object.keys(this.schema).filter(function(e){return"genome_ID"!==e}).map(function(t){return e[t]});return r.concat(a)}},{key:"find",value:function(e){var t=this,n=e[this.fk];return this.lookup.find(function(e){return e[t.labelField]===n})}}]),e}(),M=function(){function e(t,n){Object(l.a)(this,e),this.fk="instrumentation_method_label",this.foreignTable="instrumentation_methods",this.labelField="instrumentation_method",this.schema=void 0,this.lookup=void 0,this.schema=t.properties.experimental.properties[this.foreignTable].items.properties,this.lookup=n.experimental[this.foreignTable]}return Object(s.a)(e,[{key:"ths",value:function(e){return this.headers().map(function(t,n){return r.createElement("th",{key:n+e},t)})}},{key:"tds",value:function(e,t){var n=this.find(e);return this.htmlCols(n).map(function(e,n){return r.createElement("td",{key:n+t},e)})}},{key:"textCols",value:function(e){var t=this.find(e);return this.textColsOf(t)}},{key:"headers",value:function(){var e=this;return Object.keys(this.schema).map(function(t){return e.schema[t].title})}},{key:"htmlCols",value:function(e){var t=this.schema.instrumentation,n=this.schema.mode;return Object.keys(this.schema).map(function(a){var i=e[a];if("instrumentation"===a){var o=t.properties.instrument.anyOf.find(function(e){return e.enum[0]===i.instrument}).title;return"Other Mass Spectrometer"===o?r.createElement("span",{key:e.instrumentation.other_instrument},e.instrumentation.other_instrument):r.createElement("a",{key:i.instrument,href:i.instrument},o)}if("mode"===a){var l=n.anyOf.find(function(e){return e.enum[0]===i}).title;return r.createElement("a",{key:i,href:i},l)}return i})}},{key:"textColsOf",value:function(e){var t=this.schema.instrumentation,n=this.schema.mode;return Object.keys(this.schema).map(function(r){var a=e[r];if("instrumentation"===r){var i=t.properties.instrument.anyOf.find(function(e){return e.enum[0]===a.instrument}).title;return"Other Mass Spectrometer"===i?e.instrumentation.other_instrument:i}return"mode"===r?n.anyOf.find(function(e){return e.enum[0]===a}).title:a})}},{key:"find",value:function(e){var t=this,n=e[this.fk];return this.lookup.find(function(e){return e[t.labelField]===n})}}]),e}(),G=function(){function e(t,n){Object(l.a)(this,e),this.fk="sample_preparation_label",this.foreignTable="sample_preparation",this.labelField="sample_preparation_method",this.schema=void 0,this.lookup=void 0,this.schema=t.properties.experimental.properties[this.foreignTable].items.properties,this.lookup=n.experimental[this.foreignTable]}return Object(s.a)(e,[{key:"ths",value:function(e){return this.headers().map(function(t,n){return r.createElement("th",{key:n+e},t)})}},{key:"tds",value:function(e,t){var n=this.find(e);return this.htmlCols(n).map(function(e,n){return r.createElement("td",{key:n+t},e)})}},{key:"headers",value:function(){var e=this,t=[this.schema.medium_details.properties.medium_type.title,this.schema.medium_details.properties.medium.title],n=Object.keys(this.schema).filter(function(e){return"medium_details"!==e}).map(function(t){return e.schema[t].title});return t.concat(n)}},{key:"textCols",value:function(e){var t=this.find(e);return this.textColsOf(t)}},{key:"textColsOf",value:function(e){var t=this.schema.medium_details.properties.medium,n=this.schema.metagenome_details.properties.environment,r=e.medium_details.medium_type,a=Object.keys(this.schema).map(function(r){var a=e[r];if("medium_details"===r){var i=t.anyOf.find(function(e){return e.enum[0]===a.medium}).title;return"other"===a.medium?a.Other_medium:i}if("metagenome_details"===r){if(!a.environment)return;var o=n.anyOf.find(function(e){return e.enum[0]===a.environment}).title;return"other"===a.environment?a.Other_environment:o}return a});return a.unshift(r),a}},{key:"htmlCols",value:function(e){var t=this.schema.medium_details.properties.medium,n=this.schema.metagenome_details.properties.environment,a=e.medium_details.medium_type,i=Object.keys(this.schema).map(function(a){var i=e[a];if("medium_details"===a){var o=t.anyOf.find(function(e){return e.enum[0]===i.medium}).title;return"other"===i.medium?r.createElement("span",null,i.Other_medium):r.createElement("a",{key:i.medium,href:i.medium},o)}if("metagenome_details"===a){if(!i.environment)return;var l=n.anyOf.find(function(e){return e.enum[0]===i.environment}).title;return"other"===i.environment?i.Other_environment:r.createElement("a",{key:i,href:i},l)}return i});return i.unshift(a),i}},{key:"find",value:function(e){var t=this,n=e[this.fk];return this.lookup.find(function(e){return e[t.labelField]===n})}}]),e}(),R=n(151);function F(e,t){return function(e,t){var n=[new I(e,t),new G(e,t),new D(e,t),new M(e,t)],r=e.properties.genome_metabolome_links.items.properties,a=new Set(n.map(function(e){return e.fk})),i=Object.keys(r).filter(function(e){return!a.has(e)}),o=i.map(function(e){return r[e].title});n.forEach(function(e){return e.headers().forEach(function(e){return o.push(e)})});var l=t.genome_metabolome_links.map(function(e,t){var r=i.map(function(t,n){return e[t]});return n.forEach(function(t){return t.textCols(e).forEach(function(e){return r.push(e)})}),r});return[o].concat(Object(R.a)(l))}(e,t).map(function(e){return e.join("\t")}).join("\n")}function L(e,t){var n=btoa(F(e,t));return"data:".concat("text/tab-separated-values",";base64,").concat(n)}function B(e,t){var n=t.find(function(t){return t.title===e});return n?n.enum[0]:n}function N(e,t){var n=[],r=new Set,a=[],i=new Set,o=[],l=new Set,s=[],m=new Set,c=t.map(function(t){var c=t["Location of metabolomics data file"],u=t["Genome Label"];r.has(u)||(n.push(function(e){var t={genome_ID:{genome_type:e["Genome or Metagenome"]},genome_label:e["Genome Label"]},n=e["GenBank accession number"];n&&(t.genome_ID.GenBank_accession=n);var r=e["RefSeq accession number"];r&&(t.genome_ID.RefSeq_accession=r);var a=e["ENA/NCBI accession number"];a&&(t.genome_ID.ENA_NCBI_accession=a);var i=e["MGnify accession number"];i&&(t.genome_ID.MGnify_accession=i);var o=e["BioSample accession number"];o&&(t.BioSample_accession=o);var l=e["Key publications"];return l&&(t.publications=l),t}(t)),r.add(u));var h=t["Sample Growth Conditions Label"];i.has(h)||(a.push(function(e,t){var n={sample_preparation_method:e["Sample Growth Conditions Label"],medium_details:{}},r=e["Medium type"];r&&(n.medium_details.medium_type=r);var a=e["Growth medium"];if(a){var i=B(a,t.properties.experimental.properties.sample_preparation.items.properties.medium_details.properties.medium.anyOf);i?n.medium_details.medium=i:n.medium_details.Other_medium=a}var o=e["Growth temperature"];o&&(n.growth_temperature=1*o);var l=e.Aeration;l&&(n.aeration=l);var s=e["Growth time"];s&&(n.growing_time=1*s);var m=e["Growth phase or OD"];m&&(n.growth_phase_OD=m);var c=e["Other growth conditions"];c&&(n.other_growth_conditions=c);var u=e["Metagenome details"],h=B(u,t.properties.experimental.properties.sample_preparation.items.properties.metagenome_details.properties.environment.anyOf);n.metagenome_details=h?{environment:h}:{Other_environment:u};var p=e["Metagenomic sample description"];return p&&(n.metagenomic_sample_description=p),n}(t,e)),i.add(h));var p=t["Extraction Method Label"];l.has(p)||(o.push(function(e,t){var n={extraction_method:e["Extraction Method Label"],solvents:[]};e["Extraction solvent"].split(";").forEach(function(e){var r=e.split("="),a=Object(C.a)(r,2),i=a[0],o=a[1],l=B(i,t.properties.experimental.properties.extraction_methods.items.properties.solvents.items.properties.solvent.anyOf);l?n.solvents.push({solvent:l,ratio:parseFloat(o)}):n.solvents.push({Other_solvent:i,ratio:parseFloat(o)})});var r=e["Other extraction details"];return r&&(n.other_extraction_parameters=r),n}(t,e)),l.add(p));var f=t["Instrumentation Method Label"];return m.has(f)||(s.push(function(e,t){var n={instrumentation_method:e["Instrumentation Method Label"]},r=e.Instrumentation,a=B(r,t.properties.experimental.properties.instrumentation_methods.items.properties.instrumentation.properties.instrument.anyOf);n.instrumentation=a?{instrument:a}:{other_instrument:r};var i=e["Column details"];i&&(n.column=i);var o=e["Instrument mode"];o&&(n.mode=B(o,t.properties.experimental.properties.instrumentation_methods.items.properties.mode.anyOf));var l=e["Mass range"];l&&(n.range=l);var s=e["Collision energy"];s&&(n.collision_energy=s);var m=e.Buffering;m&&(n.buffering=m);var c=e["Other instrumentation information"];return c&&(n.other_instrumentation=c),n}(t,e)),m.add(f)),{genome_label:u,metabolomics_file:c,sample_preparation_label:h,extraction_method_label:p,instrumentation_method_label:f}});return{version:"1",personal:{},metabolomics:{},genomes:n,experimental:{sample_preparation:a,extraction_methods:o,instrumentation_methods:s},genome_metabolome_links:c}}var T=function(e){if(!e.data.genome_metabolome_links||0===e.data.genome_metabolome_links.length)return r.createElement("p",null,"No links between (meta)genomes and metabolimics data files.");var t=new I(e.schema,e.data),n=new G(e.schema,e.data),a=new D(e.schema,e.data),i=new M(e.schema,e.data),o=e.schema.properties.genome_metabolome_links.items.properties,l=new Set([t.fk,n.fk,a.fk,i.fk]),s=Object.keys(o).filter(function(e){return!l.has(e)}),m=s.map(function(e){var t=o[e];return r.createElement("th",{key:e},t.title)}),c=t.ths(m.length);m=m.concat(c);var u=n.ths(m.length);m=m.concat(u);var h=a.ths(m.length);m=m.concat(h);var p=i.ths(m.length);m=m.concat(p);var v=e.data.genome_metabolome_links.map(function(e,o){var l=s.map(function(t,n){return"Metabolomics_Data_File"===t?r.createElement("td",{key:n},r.createElement("a",{href:e[t]},e[t])):r.createElement("td",{key:n},e[t])}),m=t.tds(e,l.length);l=l.concat(m);var c=n.tds(e,l.length);l=l.concat(c);var u=a.tds(e,l.length);l=l.concat(u);var h=i.tds(e,l.length);return l=l.concat(h),r.createElement("tr",{key:o},l)}),_="paired-"+e.data.metabolomics.GNPSMassIVE_ID+"-genome-metabolome.tsv",b=r.useState(!0),k=Object(C.a)(b,2),g=k[0],y=k[1],E=[0,8,18,21,29];return g&&(c.splice(0,c.length-1),u.splice(0,u.length-1),h.splice(0,h.length-1),p.splice(0,p.length-1),m=E.map(function(e){return m[e]}),v=v.map(function(e,t){return r.createElement("tr",{key:t},E.map(function(t){return e.props.children[t]}))})),r.createElement("div",null,r.createElement(S.a,{condensed:!0,striped:!0,bordered:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{colSpan:s.length},r.createElement(f.a,{bsSize:"xs",onClick:function(){return y(!g)},title:g?"Expand table, show all columns":"Collapse table, only show label columns"},r.createElement(d.a,{glyph:g?"plus":"minus"})," ",g?"Expand":"Collapse")),r.createElement("th",{colSpan:c.length},o[t.fk].title),r.createElement("th",{colSpan:u.length},o[n.fk].title),r.createElement("th",{colSpan:h.length},o[a.fk].title),r.createElement("th",{colSpan:p.length},o[i.fk].title)),r.createElement("tr",null,m)),r.createElement("tbody",null,v)),r.createElement("a",{href:L(e.schema,e.data),download:_},"tab delimited downoad"))};var A=function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"application/json",n=btoa(JSON.stringify(e,null,4));return"data:".concat(t,";base64,").concat(n)}(e.data),n=e.schema.properties.personal.properties,a=Object.keys(n).map(function(t){var a=n[t];return r.createElement("li",{key:t},a.title,": ",e.data.personal[t])}),i=e.schema.properties.metabolomics.properties,o=Object.keys(i).map(function(t){var n=i[t];return r.createElement("li",{key:t},n.title,": ",e.data.metabolomics[t])}),l=e.data.metabolomics.GNPSMassIVE_ID,s="paired_datarecord_".concat(l,".json");return r.createElement("div",null,r.createElement("h3",null,"iOMEGA Paired data record:"),r.createElement(f.a,{href:t,download:s},r.createElement(d.a,{glyph:"download"})," Download"),r.createElement("h2",null,"Submitter Information"),r.createElement("ul",null,a),r.createElement("h2",null,"Metabolomics project details"),r.createElement("ul",null,o),r.createElement("h2",null,"Links between genomes and metabolomics data"),r.createElement(T,{data:e.data,schema:e.schema}),r.createElement("h2",null,"Linked gene clusters and MS2 spectra"),r.createElement(w,{data:e.data,schema:e.schema}))};n(310);function U(e,t,n){return function(r){var a=e.formRef.current;if(!a)return[];var i=a.state.formData;if(!i)return[];if(r===t)return n(i);throw new Error("Invalid property name: "+r)}}function K(e){return e.genomes?e.genomes.map(function(e){return e.genome_label}):[]}function q(e){return e.experimental.sample_preparation?e.experimental.sample_preparation.map(function(e){return e.sample_preparation_method}):[]}function P(e){return e.experimental.extraction_methods?e.experimental.extraction_methods.map(function(e){return e.extraction_method}):[]}function V(e){return void 0===e.experimental.instrumentation_methods?[]:e.experimental.instrumentation_methods.map(function(e){return e.instrumentation_method})}function J(e){return e.genome_metabolome_links?e.genome_metabolome_links.map(function(e){return e.metabolomics_file}):[]}function z(e){return e.map(function(t,n){return e.indexOf(t)!==n?n:null}).filter(function(e){return null!==e})}function W(e,t){e.experimental.extraction_methods&&e.experimental.extraction_methods.forEach(function(e,n){e.solvents.reduce(function(e,t){return t.ratio+e},0)>1&&t.experimental.extraction_methods[n].solvents.addError("Combined ratio not within 0 and 1")});var n=K(e);z(n).forEach(function(e){t.genomes[e].genome_label.addError("Non-unique label")});var r=q(e);z(r).forEach(function(e){t.experimental.sample_preparation[e].sample_preparation_method.addError("Non-unique label")});var a=P(e);z(a).forEach(function(e){t.experimental.extraction_methods[e].extraction_method.addError("Non-unique label")});var i=V(e);if(z(i).forEach(function(e){t.experimental.instrumentation_methods[e].instrumentation_method.addError("Non-unique label")}),e.genome_metabolome_links&&e.genome_metabolome_links.forEach(function(e,o){e.genome_label&&!n.includes(e.genome_label)&&t.genome_metabolome_links[o].genome_label.addError("Invalid selection"),e.sample_preparation_label&&!r.includes(e.sample_preparation_label)&&t.genome_metabolome_links[o].sample_preparation_label.addError("Invalid selection"),e.extraction_method_label&&!a.includes(e.extraction_method_label)&&t.genome_metabolome_links[o].extraction_method_label.addError("Invalid selection"),e.instrumentation_method_label&&!i.includes(e.instrumentation_method_label)&&t.genome_metabolome_links[o].instrumentation_method_label.addError("Invalid selection")}),e.BGC_MS2_links){var o=J(e);z(o).forEach(function(e){t.genome_metabolome_links[e].metabolomics_file.addError("Non-unique label")}),e.BGC_MS2_links.forEach(function(e,n){e.MS2_URL&&!o.includes(e.MS2_URL)&&t.BGC_MS2_links[n].MS2_URL.addError("Invalid selection")})}return t}var $={collapsible:k.a,foreignKey:y,gmarray:function(e){var t=r.useRef(null);return r.createElement("div",null,r.createElement(x.a,e),r.createElement(f.a,{onClick:function(){t.current&&t.current.click()},title:"Upload links from tab delimited file, will replace existing links, (meta)genomes and metabolomics experimental details"},r.createElement(d.a,{glyph:"upload"})," Upload links",r.createElement("input",{type:"file",accept:"text/tab-separated-values,.tsv,.txt",onChange:function(t){if(t.target.files){var n=t.target.files[0],r=new FileReader;r.onload=function(){if(r.result){var t=Object(E.a)(r.result);e.formContext.uploadGenomeMetabolomeLinks(t)}},r.readAsText(n)}},ref:t,style:{display:"none"}})))}},H=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={schema:{},uiSchema:{},initDoc:{},validDoc:void 0},n.uploadRef=void 0,n.formRef=void 0,n.onSubmit=function(e){var t=e.formData;n.setState({validDoc:t,initDoc:t})},n.onReset=function(){n.setState({initDoc:{},validDoc:void 0})},n.onError=function(){void 0!==n.state.validDoc&&n.setState({validDoc:void 0})},n.uploadGenomeMetabolomeLinks=function(e){var t=N(n.state.schema,e),r=n.state.initDoc;r.genomes=t.genomes,r.experimental=t.experimental,r.genome_metabolome_links=t.genome_metabolome_links,r.personal||(r.personal={PI_email:void 0,PI_institution:void 0,PI_name:void 0,submitter_email:void 0,submitter_institution:void 0,submitter_name:void 0}),r.metabolomics||(r.metabolomics={GNPSMassIVE_ID:void 0,MaSSIVE_URL:void 0}),n.fillForm(r)},n.onUpload=function(){n.uploadRef.current&&n.uploadRef.current.click()},n.fillFormFromFile=function(e){if(e.target.files){var t=e.target.files[0],r=new FileReader;r.onload=function(e){if(r.result){var t=JSON.parse(r.result);n.fillForm(t)}},r.readAsText(t)}},n.loadExample1=function(){fetch("examples/paired_datarecord_MSV000078839_example.json").then(function(e){return e.json()}).then(n.fillForm)},n.fillForm=function(e){n.setState({initDoc:e,validDoc:void 0},function(){var e=n.formRef.current;e&&e.submit()})},n.uploadRef=r.createRef(),n.formRef=r.createRef(),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("schema.json").then(function(e){return e.json()}).then(function(e){return delete e.$schema,e}).then(function(t){return e.setState({schema:t})}),fetch("uischema.json").then(function(e){return e.json()}).then(function(t){!function(e,t){e.genome_metabolome_links.items.genome_label.foreignKey.search=U(t,"genome_label",K),e.genome_metabolome_links.items.sample_preparation_label.foreignKey.search=U(t,"sample_preparation_label",q),e.genome_metabolome_links.items.extraction_method_label.foreignKey.search=U(t,"extraction_method_label",P),e.genome_metabolome_links.items.instrumentation_method_label.foreignKey.search=U(t,"instrumentation_method_label",V),e.BGC_MS2_links.items.MS2_URL.foreignKey.search=U(t,"MS2_URL",J)}(t,e),e.setState({uiSchema:t})})}},{key:"render",value:function(){var e={uploadGenomeMetabolomeLinks:this.uploadGenomeMetabolomeLinks};return r.createElement("div",{className:"App"},Object.keys(this.state.schema).length>0&&Object.keys(this.state.uiSchema).length>0&&r.createElement(_.a,{schema:this.state.schema,uiSchema:this.state.uiSchema,fields:$,formData:this.state.initDoc,onSubmit:this.onSubmit,onError:this.onError,validate:W,formContext:e,ref:this.formRef},r.createElement(h.a,null,r.createElement(p.a,null,r.createElement(f.a,{onClick:this.loadExample1,title:"Load example dataset"},r.createElement(d.a,{glyph:"paperclip"})," Example"),r.createElement(f.a,{onClick:this.onUpload,title:"Upload JSON file"},r.createElement(d.a,{glyph:"upload"})," Upload",r.createElement("input",{type:"file",accept:"application/json,.json",onChange:this.fillFormFromFile,ref:this.uploadRef,style:{display:"none"}}))),r.createElement(p.a,null,r.createElement(f.a,{type:"submit",bsStyle:"primary"},r.createElement(d.a,{glyph:"ok"})," Save"),r.createElement(f.a,{type:"reset",onClick:this.onReset},r.createElement(d.a,{glyph:"remove"})," Reset")))),this.state.validDoc&&r.createElement(A,{data:this.state.validDoc,schema:this.state.schema}))}}]),t}(r.Component);n(311),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(312),n(313);o.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[154,1,2]]]);
//# sourceMappingURL=main.00a067df.chunk.js.map