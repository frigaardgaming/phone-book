// Definerer en klasse for at kunne oprette objekter med
// samme struktur på tværs af objekter.
export class Contacts {
    constructor(firstname, lastname, email, phone, company, position, created) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.company = company;
        this.position = position;
        this.created = created;
    }

}