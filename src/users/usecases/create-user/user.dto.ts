export abstract class CreateUserDTO {
  userId: string;
  name: string;
  email: string;
  isVerified?: boolean;
}
