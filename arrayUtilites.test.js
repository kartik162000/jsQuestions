const {doubleNumbers,tripleEvenNumbers} = require('./arrayUtilites.js')
describe('Array utilities',()=>{
    describe('double number',()=>
    {
        it('Should double element when input is array',()=>
        {
            const result= doubleNumbers([1,2,3])
            expect(result).toStrictEqual([2,4,6])
        }),
        it('Should -1 when input is string',()=>
        {
            expect(()=>{
                doubleNumbers('string')
            }).toThrowError('You must provide a number')
        })
    })
    describe('triple and even number',()=>
    {
        it('Should filter even elements  when input is array and tripled',()=>
        {
            const result= tripleEvenNumbers([1,2,3])
            expect(result).toEqual([6])
        }),
        it('Should error when input is string',()=>
        {
            expect(()=>{
                tripleEvenNumbers('string')
            }).toThrowError('You must provide a number')
        })
        ,
        it('Should throw error when input is invalid array',()=>
        {
            expect(()=>{
                tripleEvenNumbers([1,'2fdgfhg','3.0'])
            }).toThrowError('invalid array input')
        })
    });
})