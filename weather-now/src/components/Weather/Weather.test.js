import Weather from './Weather';

describe('Weather Layout component', () => {

    it('Test function cache for 10 minutes', () => {
        expect(Weather.cacheTime(new Date())).toBe(false)
    });

    it('Test function API Call, cod 404 - City not found', async () => {
        await Weather.getWeather('Nuuk,GL').then(result => {
            expect(result.cod).not.toBe('404')
        })        
    })
    
});
