export class Contact {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
        public subject: string,
        public body: string,
        public sentDate: number,
        public viewed: boolean,
        public id: string,
    ) {
    }
}
