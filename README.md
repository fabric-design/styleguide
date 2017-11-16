<p align="center">
<img src="https://github.com/fabric-design/components/raw/master/doc/assets/fabric-logo.png"  />
</p>

# Zalando Fabric Components
[![CircleCI](https://circleci.com/gh/fabric-design/styleguide.svg?style=svg)](https://circleci.com/gh/fabric-design/styleguide)
[![Issues](https://img.shields.io/github/issues/fabric-design/styleguide.svg)](https://github.com/fabric-design/styleguide/issues)
[![Contributors](https://img.shields.io/github/contributors/fabric-design/styleguide.svg)]()

## Motivation

At Zalando Retail Operations we develop a lot of web applications of different size and complexity. We want to ensure consistent look and feel in every one of them, regardless which individual team worked on it. For this purpose we created a [styleguide](https://github.com/fabric-design/styleguide) that provides a [SCSS style library](https://github.com/fabric-design/scss) and a set of independent React [components](https://github.com/fabric-design/components).

This repository is hosting the styleguide single page applications which itself is just some sort of "container" as the whole documentation is developed in the corresponding repositories, which means if you want to document some general concepts or just provide styling you should document this in the [SCSS style library](https://github.com/fabric-design/scss). Everything related to how to use a component and also documenting it, you need to do it in the [components](https://github.com/fabric-design/components).

The styleguide itself installs both repositories via npm, parses the markdown in the documentation folders and creates our styleguide application.


## Getting started / How it works

As described before, the styleguide itself depends on the [SCSS style library](https://github.com/fabric-design/scss) and React [components](https://github.com/fabric-design/components). Furthermore the application is developed with the [Aurelia JS](http://aurelia.io/) Framework and uses the [Aurelia CLI](https://github.com/aurelia/cli) to build and run the application.

Either you install the cli globally `npm install -g aurelia-cli` and run the `au [--command] ` command automatically or you just use `npm run au [--command]`. The project itself is generated via the Aurelia-CLI.


### Getting started

0. Install Aurelia CLI `npm install -g aurelia-cli`
1. `npm install` to install all dependancies
2. `npm run au `or `au` to list all commands
3. `npm run au run ` or `au run` to run a local version of the styleguide
4. Application runs on http://localhost:9001 

### Further development tasks

We are providing additional aurelia cli commands for easy local testing and building bundles.
```shell
build --env value

    Builds and processes all application assets.

    --env - Sets the build environment.

run --env value --watch

    Builds the application and serves up the assets via a local web server, watching
    files for changes as you work.

    --env - Sets the build environment.

    --watch - Watches source files for changes and refreshes the app
    automatically.
```

As an example, you can either run them via `au run [--watch, --env] `if you have installed the aurelia CLI globally or with the node_modules version via `npm run au run [--watch, --env] `

## Contributing

The styleguide is in active development and we welcome any contributions and feedback. See our [contributing guidelines](./CONTRIBUTING.MD) for detailed information.

## Contact

Feel free to reach out any of us. We are all friendly and will be more then happy to answer any question regarding our styleguide.

## License

Copyright (c) 2017 Zalando SE

The fabric-design/styleguide is released under the MIT license. See LICENSE for details.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
