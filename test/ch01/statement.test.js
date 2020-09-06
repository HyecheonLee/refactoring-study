import {expect} from 'chai'
import {statement} from '../../src/ch01/statement.js'
import invoices from './invoices.json'
import plays from './plays.json'

describe('statement', () => {
  it('should print a statement for multiple plays, single customer and multiple seats in plain text',
      () => {
        let expected =
            `청구 내역 (고객명 : BigCo)
 Hamlet: $650.00 (55석)
 As You Like It: $1,980.00 (35석)
 Othello: $500.00 (40석)
총액: $3,130.00
적립 포인트 : 47점
`
        expect(statement(invoices[0], plays)).to.equal(expected)
      });
});