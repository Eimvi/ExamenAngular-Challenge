export interface Filters {
  instructionsOne: FilterOne[];
  instructionsTwo: FilterOne[];
  urlVideo: string;
  instructions: string;
  title: string;
  image: string;
}

export interface FilterOne {
  measure: string;
  ingredient: string;
}
