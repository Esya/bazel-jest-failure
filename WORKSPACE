workspace(
    name = "demo",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

skylib_version = "0.8.0"

http_archive(
    name = "bazel_skylib",
    sha256 = "2ef429f5d7ce7111263289644d233707dba35e39696377ebab8b0bc701f7818e",
    type = "tar.gz",
    url = "https://github.com/bazelbuild/bazel-skylib/releases/download/{}/bazel-skylib.{}.tar.gz".format(skylib_version, skylib_version),
)

load("@bazel_skylib//:lib.bzl", "versions")

versions.check(minimum_bazel_version = "0.26.0")

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "a54b2511d6dae42c1f7cdaeb08144ee2808193a088004fc3b464a04583d5aa2e",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.42.3/rules_nodejs-0.42.3.tar.gz"],
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")

node_repositories(package_json = ["//:package.json"])

load("@build_bazel_rules_nodejs//:defs.bzl", "yarn_install")

yarn_install(
    name = "npm",
    data = [],
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

ts_setup_workspace()

# buildifier is written in Go and hence needs rules_go to be built.
# See https://github.com/bazelbuild/rules_go for the up to date setup instructions.
#http_archive(
#    name = "io_bazel_rules_go",
#    sha256 = "a82a352bffae6bee4e95f68a8d80a70e87f42c4741e6a448bec11998fcc82329",
#    urls = ["https://github.com/bazelbuild/rules_go/releases/download/0.18.5/rules_go-0.18.5.tar.gz"],
#)
#
#load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

#go_rules_dependencies()
#
#go_register_toolchains()
#
#http_archive(
#    name = "com_github_bazelbuild_buildtools",
#    sha256 = "68f5245048c899a50047ebf8015ace16345ffc6610e5431964464b612da7941f",
#    strip_prefix = "buildtools-609ca6e8a79750cf4c6ce37bb92ae8d54876f9e1",
#    url = "https://github.com/bazelbuild/buildtools/archive/609ca6e8a79750cf4c6ce37bb92ae8d54876f9e1.zip",
#)
#
#load("@com_github_bazelbuild_buildtools//buildifier:deps.bzl", "buildifier_dependencies")
#
#buildifier_dependencies()
