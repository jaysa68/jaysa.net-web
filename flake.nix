{
  description = "jaysa.net website";
  inputs.nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";

  outputs =
    { self, nixpkgs }:
    let
      pkgs = nixpkgs.legacyPackages.x86_64-linux;
    in
    {
      formatter.x86_64-linux = pkgs.nixfmt;
      packages.x86_64-linux.default = pkgs.buildNpmPackage {
        name = "jaysa.net";
        src = ./jaysa.net;
        npmDepsHash = "sha256-6n1xQuL1DLUaksYa8rj+4ym+6Z/EK6JnSSIqkRYnM6w=";
        installPhase = ''
          cp -r out $out
        '';
      };
    };
}
