import 'babel-core/register';
import 'babel-polyfill';
import { average, runSample } from './sample.js';

  const runSamples = async () => {
    const samples = await Promise.all([runSample(), average()])
                            .catch((e) => { console.error('Error occureed', e) });
    console.log(`Sample 1 ------->predict -------->${samples[0].print()}`);
    console.log(`Sample 2 ------->tidy -----------> ${samples[1].print()}`);
  };

  runSamples().catch(e => { console.error('Unhandled exception', e) });
