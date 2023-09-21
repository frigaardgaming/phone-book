export default function Form() {
    return (
        <form>
            <label htmlFor="firstname">Fornavn:</label>
            <input type="text" />

            <label htmlFor="lastname">Efternavn:</label>
            <input type="text" />

            <label htmlFor="email">E-mail:</label>
            <input type="email" name="" id="" />

            <label htmlFor="phone">Telefon:</label>
            <input type="tel" pattern="[0-9]{8}" name="" id="" />

            <label htmlFor="company">Firma:</label>
            <input type="text" name="" id=""/>

            <label htmlFor="position">Stilling:</label>
            <input type="text" name="" id="" />

            <button type="submit">Opret ny kontakt</button>

        </form>
      );
    }
