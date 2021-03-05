describe('Meine Tests', () => {
    it('Mein erster Test', () => {
        expect(true).toBe(true);
        expect(process.env.MEINE_GEHEIME_VARIABLE).toEqual("Geheimer wert.")
    });
});
