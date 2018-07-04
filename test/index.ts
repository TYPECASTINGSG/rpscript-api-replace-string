import {expect} from 'chai';
import m from 'mocha';

import RPSReplaceString from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('replace-string', () => {

  m.it('should replace string', async function () {
    let md = new RPSReplaceString;

    let output = await md.replaceString(new RpsContext,{},"hello hey world hey", "hey","yo");

    expect(output).to.be.equals('hello yo world yo');

  }).timeout(0);

})
