/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * This person will be the point of contact for any communication related to this entry.
 */
export type NameOfContactForCorrespondence = string;
/**
 * ORCID identifier of person who is point of contact. Please use full ORCID iD, e.g. <a href="https://orcid.org/0000-0002-1825-0097" target="_blank" rel="noopener noreferrer">https://orcid.org/0000-0002-1825-0097</a> .
 */
export type ORCIDIdentifier = string;
export type SubmitterContactEMailAddress = string;
/**
 * This person will be the second point of contact for any communication related to this entry.
 */
export type NameOfSecondContactForCorrespondence = string;
export type SecondarySubmitterContactEMailAddress = string;
/**
 * This person is contacted in case the submitters have moved institutions
 */
export type NameOfThePrincipalInvestigatorOfTheSubmitter = string;
/**
 * Please use the full, official name of your institute in English. E.g., 'Harvard University'.
 */
export type AcademicInstitutionOrCompanyName = string;
export type PIContactEMailAddress = string;
/**
 * Please provide the GNPS-MassIVE identifier of your metabolomics data set, e.g., MSV000078839.
 */
export type GNPSMassIVEIdentifier = string;
/**
 * Please provide the link to the MassIVE upload, e.g., <a target="_blank" rel="noopener noreferrer" href="https://gnps.ucsd.edu/ProteoSAFe/result.jsp?task=a507232a787243a5afd69a6c6fa1e508&view=advanced_view">https://gnps.ucsd.edu/ProteoSAFe/result.jsp?task=a507232a787243a5afd69a6c6fa1e508&view=advanced_view</a>. Warning, there cannot be spaces in the URI.
 */
export type LinkToMassIVEUpload = string;
/**
 * If you have run a Molecular Network on GNPS, please provide the task ID of the Molecular Network job. It can be found in the URL of the Molecular Networking job, e.g., in <a target="_blank" rel="noopener noreferrer" href="https://gnps.ucsd.edu/ProteoSAFe/status.jsp?task=c36f90ba29fe44c18e96db802de0c6b9">https://gnps.ucsd.edu/ProteoSAFe/status.jsp?task=c36f90ba29fe44c18e96db802de0c6b9</a> the task ID is c36f90ba29fe44c18e96db802de0c6b9.
 */
export type MolecularNetworkTaskID = string;
/**
 * Please provide the MetaboLights study identifier of your metabolomics data set, e.g. MTBLS307.
 */
export type MetaboLightsStudyIdentifier = string;
/**
 * Add other associated GNPS-MassIVE identifiers here, eg. MSV000078836,MSV000078839. For example, if you have data spread out over multiple MASSIVE datasets, reported in the same publication, you can add those related IDs here. If you used the same assays ("Sample Preparation," "Extraction Methods," and/or "Instrumentation Methods"), you can clone one project and make slight modifications (e.g. different Genome IDs) instead of entering the assay information again.
 */
export type RelatedGNPSMassiveIdentifiers = string;
/**
 * Add other associated MetaboLights study identifiers here, eg. MTBLS727,MTBLS728. Similar to the related GNPS-Massive identifiers.
 */
export type RelatedMetabolightsStudyIdentifiers = string;
/**
 * Publications describing the metabolomics experiment and samples. Please input PubMed IDs (PMIDs, not PMCIDs!), separated by commas: e.g., '12000953,8843436'. Only enter numeric characters and commas. If a PMID is not available, a DOI can be entered instead (without the designation 'DOI' itself, e.g. '10.1039/c4sc01927j')
 */
export type KeyPublications = string;
export type GenomeType = 'genome' | 'metagenome' | 'metagenome-assembled genome';
/**
 * If publicly available metadata is available at <a href="https://www.ncbi.nlm.nih.gov/biosample/" target="_blank" rel="noopener noreferrer">BioSamples</a>, please provide the BioSample accession number, e.g. <a target="_blank" rel="noopener noreferrer" href="https://www.ncbi.nlm.nih.gov/biosample/?term=SAMEA3648350">SAMEA3648350</a>, here. We encourage depositing metadata following a standardized ontology to enable proper reuse of the data.
 */
export type BioSampleAccessionNumber = string;
/**
 * Publications describing the sequencing of the genome or metagenome. Please input PubMed IDs (PMIDs, not PMCIDs!), separated by commas: e.g., '12000953,8843436'. Only enter numeric characters and commas. If a PMID is not available, a DOI can be entered instead (without the designation 'DOI' itself, e.g. '10.1039/c4sc01927j')
 */
export type KeyPublications1 = string;
/**
 * Please assign a unique Genome Label for this genome or metagenome to help you recall it during the linking step. For example 'Streptomyces sp. CNB091'
 */
export type GenomeLabel = string;
/**
 * Please add all genomes and/or metagenomes for which paired data is available as separate entries.
 */
export type MetaGenomicsInformation = {
  genome_ID: GenomeOrMetagenome;
  BioSample_accession?: BioSampleAccessionNumber;
  publications?: KeyPublications1;
  genome_label: GenomeLabel;
  [k: string]: any;
}[];
export type Type = 'Full proteome' | 'Enriched';
export type ProteomeDatabase = 'ProteomeXchange' | 'PRIDE' | 'iProX' | 'JPOST' | 'PeptideAtlas' | 'MassIVE' | 'Other';
/**
 * Please provide link to public data depository where the proteomics data and metadata can be found. If the experiment is quantitative, please provide link to the expression table.
 */
export type LocationOfRawProteomicsData = string;
export type AnalysisMode = 'Data-dependent acquisition (DDA)' | 'Data-independent Acquisition (DIA)';
export type PeptideLabelling = 'iTRAQ' | 'ICPL' | 'Dimethyl' | 'Custom' | 'None';
/**
 * Publications describing the proteomics experiment. Please input PubMed IDs (PMIDs, not PMCIDs!), separated by commas: e.g., '12000953,8843436'. Only enter numeric characters and commas. If a PMID is not available, a DOI can be entered instead (without the designation 'DOI' itself, e.g. '10.1039/c4sc01927j')
 */
export type KeyPublications2 = string;
/**
 * If you have used a method that is in some aspects novel to the community, please specify here.
 */
export type AdditionalNotes = string;
/**
 * Please assign a unique proteome Label for this proteome to help you recall it during the linking step.
 */
export type ProteomeLabel = string;
export type ProteomicsInformation = {
  proteome_ID: FullProteomeOrEnriched;
  raw_data: RawDataLink;
  method: Method;
  publications?: KeyPublications2;
  notes?: AdditionalNotes;
  proteome_label: ProteomeLabel;
}[];
/**
 * Please select liquid or solid medium.
 */
export type MediumType = 'liquid' | 'solid' | 'metagenome';
/**
 * Please enter the temperature of growth in degrees Celsius.
 */
export type Temperature = number;
/**
 * Please enter the growth duration in hours.
 */
export type DurationH = number;
/**
 * Please enter the growth phase or optical density (OD) if you know it.
 */
export type PhaseOrOD = string;
/**
 * Please select aeration type.
 */
export type Type1 = 'shaking' | 'fermenter' | 'not shaking';
/**
 * Please describe any other relevant or distinguishing growth conditions e.g. light 12h, dark 12h.  You can also define custom media here, indicate if purity checks were made, and provide more specific details.
 */
export type OtherGrowthConditions = string;
/**
 * Please assign a Sample Growth Conditions Label for this set of sample preparation details. If more than one sample growth conditions was used, please create a new Sample Growth Conditions Label for each condition by clicking on the plus.
 */
export type SampleGrowthConditionsLabel = string;
/**
 * For strains grown in culture, please fill in the first five sections. For metagenomic samples, only metagenomic source is necessary.
 */
export type SampleGrowthConditions = {
  medium_details: MediumDetails;
  growth_parameters: GrowthParameters;
  aeration: Aeration;
  other_growth_conditions?: OtherGrowthConditions;
  sample_preparation_method: SampleGrowthConditionsLabel;
  [k: string]: any;
}[];
export type Solvent =
  | Methanol
  | MethyleneChlorideDichloromethane
  | EthylAcetate
  | Chloroform
  | Acetone
  | Isopropanol
  | Butanol
  | Acetonitrile
  | Ethanol
  | DiethylEther
  | Hexane
  | Water
  | OtherSolvent;
export type Methanol = 'http://purl.obolibrary.org/obo/CHEBI_17790';
export type MethyleneChlorideDichloromethane = 'http://purl.obolibrary.org/obo/CHEBI_15767';
export type EthylAcetate = 'http://purl.obolibrary.org/obo/CHEBI_27750';
export type Chloroform = 'http://purl.obolibrary.org/obo/CHEBI_35255';
export type Acetone = 'http://purl.obolibrary.org/obo/CHEBI_15347';
export type Isopropanol = 'http://purl.obolibrary.org/obo/CHEBI_17824';
export type Butanol = 'http://purl.obolibrary.org/obo/CHEBI_28885';
export type Acetonitrile = 'http://purl.obolibrary.org/obo/CHEBI_38472';
export type Ethanol = 'http://purl.obolibrary.org/obo/CHEBI_16236';
export type DiethylEther = 'http://purl.obolibrary.org/obo/CHEBI_35702';
export type Hexane = 'http://purl.obolibrary.org/obo/CHEBI_29021';
export type Water = 'http://purl.obolibrary.org/obo/CHEBI_15377';
export type OtherSolvent = 'http://purl.obolibrary.org/obo/CHEBI_46787';
/**
 * When a mixture of solvents was used, specify in which ratio each solvent was used. The ratios should sum up to 1.
 */
export type Ratio = number;
/**
 * Please select the organic solvent used to extract the sample. If your sovent is not listed, please select Other and specify the solvent. If you used multiple solvents, please select them all and indicate the ratio.
 */
export type ExtractionSolvent = {
  solvent: Solvent;
  ratio: Ratio;
  [k: string]: any;
}[];
/**
 * Material used for extraction
 */
export type ExtractedMaterial = Cells | Supernatant | CellsSupernatant | ComplexMixtureMetagenome;
export type Cells = 'cells';
export type Supernatant = 'supernatant';
export type CellsSupernatant = 'cells_supernatant';
export type ComplexMixtureMetagenome = 'complex';
/**
 * Did you use resins in your extraction? If so, add the name of the resin here (e.g. XAD-2 or XAD-4). Otherwise, leave this section blank.
 */
export type Resins = string;
/**
 * Please describe any other relevant extraction methods, e.g. partitioned against water, fractionated with 20% acetonitrile, sequential extractions, used resins or storage manner (dried, liquid).
 */
export type OtherExtractionDetails = string;
/**
 * Please assign an Extraction Method Label for this set of extraction details. If more than one extraction method was used, please create a new Extraction Method Label for each method by clicking on the plus.
 */
export type ExtractionMethodLabel = string;
/**
 * Please provide basic details about the extraction solvents and procedures used.
 */
export type ExtractionMethods = {
  solvents?: ExtractionSolvent;
  extracted_material?: ExtractedMaterial;
  resins?: Resins;
  other_extraction_parameters?: OtherExtractionDetails;
  extraction_method: ExtractionMethodLabel;
  [k: string]: any;
}[];
/**
 * Please select the type of LCMS instrument used. If your instrument type is not listed here, please select Other and specify.
 */
export type InstrumentType =
  | Quadrupole
  | TimeOfFlightTOF
  | IonTrapIT
  | QuadrupolIT
  | OrbitrapQExactiveLTQOrbitrapEtc
  | FourierTransformIonCyclotronResonanceFTICR
  | MagneticSector
  | ElectrostaticEnergyAnalyzer
  | StoredWaveformInverseFourierTransform
  | Cyclotron
  | OtherMassSpectrometer;
export type Quadrupole = 'http://purl.obolibrary.org/obo/MS_1000081';
export type TimeOfFlightTOF = 'http://purl.obolibrary.org/obo/MS_1000084';
export type IonTrapIT = 'http://purl.obolibrary.org/obo/MS_1000264';
export type QuadrupolIT = 'http://purl.obolibrary.org/obo/MS_1000082';
export type OrbitrapQExactiveLTQOrbitrapEtc = 'http://purl.obolibrary.org/obo/MS_1000484';
export type FourierTransformIonCyclotronResonanceFTICR = 'http://purl.obolibrary.org/obo/MS_1000079';
export type MagneticSector = 'http://purl.obolibrary.org/obo/MS_1000080';
export type ElectrostaticEnergyAnalyzer = 'http://purl.obolibrary.org/obo/MS_1000254';
export type StoredWaveformInverseFourierTransform = 'http://purl.obolibrary.org/obo/MS_1000284';
export type Cyclotron = 'http://purl.obolibrary.org/obo/MS_1000288';
export type OtherMassSpectrometer = 'http://purl.obolibrary.org/obo/MS_1000443';
/**
 * Please select column phase. You can add additional column details in the Other Instrumentation Information section below.
 */
export type ColumnPhase =
  | 'Reverse Phase'
  | 'Normal Phase'
  | 'Hydrophilic interaction (HILIC)'
  | 'Strong cation exchange (SCX)';
/**
 * Please select ionization mode.
 */
export type IonizationMode = Positive | Negative | Both;
export type Positive = 'http://purl.obolibrary.org/obo/MS_1000130';
export type Negative = 'http://purl.obolibrary.org/obo/MS_1000129';
export type Both = 'http://purl.obolibrary.org/obo/CHMO_0002262';
/**
 * Please select the type of ionization used. If your ionization type is not listed here, please select Other and specify.
 */
export type IonizationType1 =
  | ElectrosprayIonizationESI
  | MatrixAssistedLaserDesorptionIonizationMALDI
  | AtmosphericPressureChemicalIonizationAPCI
  | OtherIonizationType;
export type ElectrosprayIonizationESI = 'http://purl.obolibrary.org/obo/MS_1000073';
export type MatrixAssistedLaserDesorptionIonizationMALDI = 'http://purl.obolibrary.org/obo/MS_1000075';
export type AtmosphericPressureChemicalIonizationAPCI = 'http://purl.obolibrary.org/obo/MS_1000070';
export type OtherIonizationType = 'http://purl.obolibrary.org/obo/MS_1000008';
/**
 * Please enter the mass range collected in Da. For example `100-800` for a range from 100 Da to 800 Da
 */
export type MassRange = string;
/**
 * Please enter the collision energy.
 */
export type CollisionEnergy = string;
/**
 * Did you add anything to your mobile phase, e.g. 0.1% formic acid.
 */
export type MobilePhaseConditions = string;
/**
 * Please enter any other relevant instrument or method details, such as gradient used, more column details, or any other relevant information.
 */
export type OtherInstrumentationInformation = string;
/**
 * Please assign an Instrumentation Method Label for this set of instrumentation details. If more than one LCMS instrumentation method was used, please create a new Instrumentation Method Label for each condition by clicking on the plus.
 */
export type InstrumentationMethodLabel = string;
/**
 * Please provide basic information on the type of LCMS instrumentation and protocols used in this experiment. More detailed information can go in the 'Other' box.
 */
export type InstrumentationMethods = {
  instrumentation?: Instrumentation;
  column?: ColumnPhase;
  mode?: IonizationMode;
  ionization?: IonizationType;
  range?: MassRange;
  collision_energy?: CollisionEnergy;
  buffering?: MobilePhaseConditions;
  other_instrumentation?: OtherInstrumentationInformation;
  instrumentation_method: InstrumentationMethodLabel;
  [k: string]: any;
}[];
/**
 * Please select the Genome Label to be linked to a metabolomics data file.
 */
export type GenomeMetagenome = string;
/**
 * Please select the Proteome Label to be linked to a metabolomics data file.
 */
export type Proteome = string;
/**
 * Please provide a direct link to the metabolomics data file location, e.g. <a href="ftp://massive.ucsd.edu/MSV000078839/spectrum/R5/CNB091_R5_M.mzXML" target="_blank" rel="noopener noreferrer">ftp://massive.ucsd.edu/MSV000078839/spectrum/R5/CNB091_R5_M.mzXML</a> found in the FTP download of a MassIVE dataset or <a target="_blank" rel="noopener noreferrer" href="https://www.ebi.ac.uk/metabolights/MTBLS307/files/Urine_44_fullscan1_pos.mzXML">https://www.ebi.ac.uk/metabolights/MTBLS307/files/Urine_44_fullscan1_pos.mzXML</a> found in the Files section of a MetaboLights study. Warning, there cannot be spaces in the URI.
 */
export type LocationOfMetabolomicsDataFile = string;
/**
 * Please select the Sample Growth Conditions Label for this linked dataset.
 */
export type SampleGrowthConditions1 = string;
/**
 * Please select the Extraction Method Label for this linked dataset
 */
export type ExtractionMethod = string;
/**
 * Please select the Instrumentation Method Label for this linked dataset
 */
export type InstrumentationMethod = string;
/**
 * Create a linked pair by selecting the Genome Label as provided earlier and subsequently sample names of and links to the metabolomics data file belonging to that genome with appropriate experimental methods.
 */
export type GenomeProteomeMetabolomeLinks = {
  genome_label: GenomeMetagenome;
  proteome_label?: Proteome;
  metabolomics_file: LocationOfMetabolomicsDataFile;
  sample_preparation_label: SampleGrowthConditions1;
  extraction_method_label: ExtractionMethod;
  instrumentation_method_label: InstrumentationMethod;
}[];
/**
 * Please provide a brief description of the known linked molecule(s) and gene cluster(s), including the name of the molecule(s).
 */
export type KnownLinkedGeneClusterAndMolecule = string;
/**
 * Please indicate if verification of the link between BGC and MS2 is experimentally validated or bioinformatically inferred.
 */
export type LinkVerification = (
  | 'Experimentally validated with knockouts, heterologous expression, or other gene cluster manipulation'
  | 'Bioinformatically inferred through comparative analysis with another experimentally defined gene cluster'
  | 'Experimentally validated with NMR and/or detailed MS/MS analysis'
  | 'Evidence as indicated in MIBiG'
)[];
/**
 * Select how the quantitative data is calculated.
 */
export type Type2 = 'Quantitative proteomics experiment' | 'Not available';
/**
 * Please provide the SMILES notation for the known molecule.
 */
export type SimplifiedMolecularInputLineEntrySystemSMILES = string;
/**
 * Please provide the IUPAC name for the known molecule,
 */
export type InternationalUnionOfPureAndAppliedChemistryIUPACName = string;
export type WhatWouldYouLikeToLink = 'GNPS molecular family' | 'single molecule';
/**
 * If you already know of a biosynthetic gene cluster or biosynthetic gene cluster family that can be linked to a molecule or molecular family, please provide details in this section. Biosynthetic gene clusters can be found in <a href="https://mibig.secondarymetabolites.org/" target="_blank" rel="noopener noreferrer">MIBiG</a>.
 */
export type BiosyntheticGeneClusterMSMSLinks = {
  known_link?: KnownLinkedGeneClusterAndMolecule;
  verification: LinkVerification;
  quantitative_experiment?: VerifiedWithQuantitativeExperiment;
  SMILES?: SimplifiedMolecularInputLineEntrySystemSMILES;
  IUPAC?: InternationalUnionOfPureAndAppliedChemistryIUPACName;
  BGC_ID: MIBiGBGCAccession;
  link?: WhatWouldYouLikeToLink;
  [k: string]: any;
}[];

/**
 * This Paired Omics Data Platform is a community-based initiative standardizing links between genomic and metabolomics data in a computer-readable manner to further the field of natural products discovery. The form below aims to capture sufficient metadata to create informative links between genome sequences on the one hand and metabolomics profiles on the other hand. Note that wherever we could, we have used existing ontology to define terms. When filling out the form below, at any time the inputted data can be saved and downloaded in json format to be reloaded when continuing with the entries. The form below first asks for some personal information to provide proper credits and allow the community to ask the right person information on the linked data. Then, overall information on the metabolomics experiment is captured, before all genomes or metagenomes can be detailed, including creating a unique genome label for easy recall during linking. Then the metabolomics metadata can be saved using labels for sample growth conditions, extraction, and instrument methods. Finally, the data links can be made with references to the actual mass spectral files in MaSSIVE. Optionally, you can save links between known biosynthesis gene clusters and mass spectra or molecular families in the second part of the form. After saving your entries, a table below the form will appear filled with the links you created with experimental labels; you can also expand the table to see all information inputted. Then you can download the filled json schema in which all links are recorded. To accommodate inputting large datasets, you can download the TSV linking table, manually add new links, and re-upload the TSV file. It is important to note that all experimental labels need to be defined in the form and at least one link made before you download and edit the table. We hope you will use our platform to capture your paired data links as this will allow you and the community to efficiently use your data in follow-up studies that rely on the combined use of genome and metabolome data.
 */
export interface IOMEGAPairedOmicsDataPlatform {
  version: '3';
  personal: SubmitterInformation;
  metabolomics: MetabolomicsInformation;
  genomes: MetaGenomicsInformation;
  proteomes: ProteomicsInformation;
  experimental: ExperimentalDetails;
  genome_metabolome_links: GenomeProteomeMetabolomeLinks;
  BGC_MS2_links?: BiosyntheticGeneClusterMSMSLinks;
}
export interface SubmitterInformation {
  submitter_name?: NameOfContactForCorrespondence;
  submitter_orcid?: ORCIDIdentifier;
  submitter_email?: SubmitterContactEMailAddress;
  submitter_name_secondary?: NameOfSecondContactForCorrespondence;
  submitter_email_secondary?: SecondarySubmitterContactEMailAddress;
  PI_name?: NameOfThePrincipalInvestigatorOfTheSubmitter;
  PI_institution?: AcademicInstitutionOrCompanyName;
  PI_email?: PIContactEMailAddress;
}
/**
 * Please provide basic information on the publicly available metabolomics project from which paired data is available. Currently, we allow for links to mass spectrometry data deposited in GNPS-MaSSIVE or MetaboLights.
 */
export interface MetabolomicsInformation {
  project: GNPSMassIVE | MetaboLights;
  related_GNPSMassIVE_ID?: RelatedGNPSMassiveIdentifiers;
  related_metabolights_study_id?: RelatedMetabolightsStudyIdentifiers;
  publications?: KeyPublications;
}
export interface GNPSMassIVE {
  GNPSMassIVE_ID: GNPSMassIVEIdentifier;
  MaSSIVE_URL: LinkToMassIVEUpload;
  molecular_network?: MolecularNetworkTaskID;
  [k: string]: any;
}
export interface MetaboLights {
  metabolights_study_id: MetaboLightsStudyIdentifier;
  [k: string]: any;
}
/**
 * Please select genome (microbial isolate grown in pure culture), metagenome (microbial mixture or environmental sample), or metagenome-assembled genome (genome assembled from a metagenome with no isolate grown in culture). All genome sequences must first be submitted to a public database with a unique identifier. In the case of a whole genome sequence, please use master records. At least one identifier must be entered.
 */
export interface GenomeOrMetagenome {
  genome_type: GenomeType;
  [k: string]: any;
}
/**
 * If proteomics experiment includes any enrichment processes in favour of target proteins, please select `Enriched` and provide target(s).
 */
export interface FullProteomeOrEnriched {
  proteome_type: Type;
  [k: string]: any;
}
export interface RawDataLink {
  database: {
    database_name: ProteomeDatabase;
    [k: string]: any;
  };
  proteome_data_link: LocationOfRawProteomicsData;
}
/**
 * Please provide basic criteria of proteomics experiment.
 */
export interface Method {
  analysis_mode: AnalysisMode;
  peptide_labelling: PeptideLabelling;
  [k: string]: any;
}
/**
 * Please provide basic information about the Sample Preparation, Extraction Methods, and Instrumentation Methods used. If different Sample Preparation, Extraction Methods, and/or Instrumentation Methods were used leading to different metabolomics data, please use separate entries for each experimental change and create a label that will help you recall the experimental parameters during the linking step.
 */
export interface ExperimentalDetails {
  sample_preparation?: SampleGrowthConditions;
  extraction_methods?: ExtractionMethods;
  instrumentation_methods?: InstrumentationMethods;
}
export interface MediumDetails {
  medium_type?: MediumType;
  [k: string]: any;
}
export interface GrowthParameters {
  growth_temperature?: Temperature;
  growth_duration?: DurationH;
  growth_phase_OD?: PhaseOrOD;
}
export interface Aeration {
  aeration_type?: Type1;
  [k: string]: any;
}
export interface Instrumentation {
  instrument?: InstrumentType;
  [k: string]: any;
}
export interface IonizationType {
  ionization_type?: IonizationType1;
  [k: string]: any;
}
export interface VerifiedWithQuantitativeExperiment {
  quantitative_experiment_type: Type2;
  [k: string]: any;
}
export interface MIBiGBGCAccession {
  BGC?: 'MIBiG number associated with this exact BGC' | 'MIBiG number of a similar BGC from a closely related strain';
  [k: string]: any;
}
