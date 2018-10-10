export type IconPrefix = "fqts";

export interface IconLookup {
  prefix: IconPrefix;
  // IconName is defined in the code that will be generated at build time and bundled with this file.
  iconName: IconName;
}

export interface IconDefinition extends IconLookup {
  icon: [
    number, // width
    number, // height
    string[], // ligatures
    string, // unicode
    string // svgPathData
  ];
}

export interface IconPack {
  [key: string]: IconDefinition;
}
export type IconName = '500px' | 
  'train09' | 
  'train10' | 
  'railcar' | 
  'railway-station' | 
  'shipment-box' | 
  'train01' | 
  'train02' | 
  'train03' | 
  'train04' | 
  'train-crossing' | 
  'train-cross-tracks' | 
  'train-stop' | 
  'train-tracks' | 
  'train-tracks02' | 
  'curve-track' | 
  'doubletracks-curve' | 
  'filled-railcar' | 
  'railcar02' | 
  'railcar03' | 
  'railcar04' | 
  'tracks-highway' | 
  'train05' | 
  'train06' | 
  'train07' | 
  'train08' | 
  'train-tracks03' | 
  'train-tunnel' | 
  'tanker-money' | 
  'train-magnified' | 
  'tankcar-magnified';
