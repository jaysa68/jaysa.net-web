{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    npm = {
      enable = true;
      install.enable = true;
    };
  };

  # https://devenv.sh/processes/
  processes.dev.exec = "npx next dev";

  # https://devenv.sh/basics/
  enterShell = ''
    echo "running jaysa.net locally! <3"
    echo "Run 'devenv up' to start the Next.js dev server"
  '';

  # See full reference at https://devenv.sh/reference/options/
}
