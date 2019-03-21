# Codehawk Client

This is the official [Codehawk](https://codehawk.app/) client.

For more information on what Codehawk is, please visit the [website](https://codehawk.app).

## Usage

Install this module globally, configure your project then simply run `codehawk` in your project root:

1. `npm install -g codehawk`
2. `cd /to/your/project`
3. `touch hawk.json`
4. Ensure your `hawk.json` configuration contains your project token, and configure any options in here.
5. `codehawk`

You will be prompted to login on the first run, using your login token which can be grabbed from your dashboard on [Codehawk.app](https://codehawk.app/).

## Options

To customise your analysis, use the following options, placed in a `hawk.json` file in the root directory.

| Option               | Description                                                                                                                                                                                                                              | Default                              |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| `uploadToken`        | **REQUIRED** Your project upload token, taken from https://codehawk.app                                                                                                                                                                  | `''`                                 |
| `extensions`         | File extensions that should be analyzed. The default is always used, but you can add more extensions. Use the `exclude` option to skip any of the default extensions.                                                                    | `['.js', '.jsx', '.ts', '.tsx']`     |
| `excludeFilenames`   | Filename matches that should be excluded from analysis. The default is always used, but you can add more matches to be excluded. Note that the matching is exact. The exclude list is taken into consideration after the extension list. | `['.d.ts', '.min.js', '.bundle.js']` |
| `excludeDirectories` | Directory matches that should be excluded from analysis. Relative to the root. E.g. `['/fixtures', '/test']`                                                                                                                             | `[]`                                 |

## Supported sources

Codehawk supports many types of javascript source out of the box:

- Plain JavaScript of any stable specification
- TypeScript
- Flow
- Styled Components, etc

Note that Codehawk cannot understand certain obscure syntax or recently released Flow or TypeScript features, but the client will warn you during usage in this case. Please email us in this scenario so that we can improve Codehawk.

## Troubleshooting

For troubleshooting and support, please contact support at support@codehawk.app, or reach out to Sam. Feedback also welcome!

## License

(c) Copyright 2019 Sgb Digital Services Ltd, all rights reserved.