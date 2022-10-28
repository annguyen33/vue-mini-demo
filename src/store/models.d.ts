export interface UserEntity {
  id: string;
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
}

export interface ProductEntity {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface JokeEntity {
  joke: string;
  id: string;
  status: number;
  message: string | null;
}
