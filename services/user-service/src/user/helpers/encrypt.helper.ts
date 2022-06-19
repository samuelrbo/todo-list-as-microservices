import * as bcrypt from 'bcrypt';

export class EncryptHelper {
  public static encrypt(data: string): string {
    const salt: string = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(data, salt);
  }

  public static isValid(data: string, encryptedData: string): boolean {
    return bcrypt.compareSync(data, encryptedData);
  }
}
