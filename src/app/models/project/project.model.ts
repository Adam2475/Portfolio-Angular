export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  tags?: string[];
}

// a model is a blueprint for creating objects. 
// It defines the structure and properties of an object.