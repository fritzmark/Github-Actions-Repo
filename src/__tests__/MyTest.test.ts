describe('Meine Tests', () => {
    it('Mein erster Test', () => {
        expect(true).toBe(true);
        expect(process.env.MEINE_GANZ_NORMALE_VARIABLE).toEqual("Geheimer wert.")
    });
});
