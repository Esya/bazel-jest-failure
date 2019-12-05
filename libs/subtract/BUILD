package(default_visibility = ["//visibility:public"])

load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
load("@npm_bazel_typescript//:index.bzl", "ts_library", "ts_config")

ts_config(
    name = "tsconfig",
    src = ":tsconfig.json",
    deps = ["//:tsconfig.json"]
)

ts_library(
    name = "subtract",
    tsconfig = ":tsconfig",
    srcs = glob(["**/*.ts"]),
    module_name = "@demo/subtract",
    deps = [
      "//libs/add"
    ],
)

nodejs_binary(
    name = "manual",
    bootstrap = ["source-map-support/register"],
    data = [
        ":subtract",
        "@npm//source-map-support",
    ],
    entry_point = ":src/manual.ts",
)
