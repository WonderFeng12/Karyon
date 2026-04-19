
export interface Product {
  id: string;
  name: string;
  category: string;
  collection: string;
  weight: string;
  ply: string;
  size: string;
  image: string;
  bestSeller?: boolean;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface InquiryForm {
  companyName: string;
  email: string;
  requirements: string;
}
