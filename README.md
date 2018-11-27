# ng-font-qts

[![npm version](https://img.shields.io/npm/v/ng-font-qts.svg)](https://npmjs.org/package/ng-font-qts) 
[![GitHub license](https://img.shields.io/github/license/nthompson777/ng-font-qts.svg)](https://github.com/nthompson777/ng-font-qts/blob/master/LICENSE) 


## Table of contents
1. [Getting Started](#getting-started)
2. [Installation Instructions](#installation-instructions)
3. [Usage Example](#usage-example)
4. [License](#license)

## Getting Started

A custom icon set that fills the gap for iconography that isn't covered with Font Awesome 5. ng-font-qts uses Angular tree shaking - to load only the icons that you're using in your app, icon auto conversion to SVG, and all of the same features that you would find with Angular Font Awesome 5.


## Installation instructions

Install `ng-font-qts` and `@fortawesome/angular-fontawesome` from `yarn` or `npm`:
```bash
yarn add ng-font-qts @fortawesome/angular-fontawesome
npm i ng-font-qts @fortawesome/angular-fontawesome 
```

For Angular Font QTS to work with Treeshaking (only load the icons that you need/use for your app), you must first import 'angular-fontawesome' to your NgModule imports:
```
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
imports: [
  ...
  FontAwesomeModule,
  ...
],
```

## Usage Example

Add the icons you wish to use to your components:
```
import { faTrain01, faTrainTracks02 } from 'ng-font-qts/font-qts';

export class HomeComponent implements OnInit {
  // ng Font QTS
  faTrain01 = faTrain01;
  faTrainTracks02 = faTrainTracks02;
}
```

Now include those icons in your HTML file:

```
<section>
  <h4>Font-QTS Angular Test</h4>
  <p>
    You should see a train (train01) and a railroad track (train-tracks02) icon here: <fa-icon [icon]="faTrain01" size="2x"></fa-icon>       <fa-icon [icon]="faTrainTracks02" size="2x"></fa-icon>
  </p>
</section>
```

### License

MIT
