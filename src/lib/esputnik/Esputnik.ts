import axios from 'axios';

const BASE_URL = 'https://esputnik.com/api/v1';

export class Esputnik {
  constructor(private apiKey: string) {}
  sendSms(text: string, to: string): Promise<any> {
    return axios.post(
      `${BASE_URL}/message/sms`,
      { text, from: 'marketing', phoneNumbers: [to] },
      { auth: { username: 'api', password: this.apiKey } },
    );
  }
}
