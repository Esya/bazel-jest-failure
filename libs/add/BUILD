package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_config", "ts_library")
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")
load("//:jest.bzl", "jest_test")

ts_config(
    name = "tsconfig",
    src = ":tsconfig.json",
    deps = ["//:tsconfig.json"],
)

ts_library(
    name = "add",
    srcs = glob(["**/*.ts"]),
    module_name = "@demo/add",
    tsconfig = ":tsconfig",
    deps = [
        "@npm//@types/jest",
        "@npm//@types/node",
    ],
)

filegroup(
    name = "js_src",
    srcs = [":add"],
    output_group = "es5_sources",
)

jest_test(
    name = "test",
    #srcs = glob(["**/*.ts"]) + [":tsconfig.json", "//:tsconfig.json"],
    srcs = [":js_src"],
    jest_config = ":jest.config.js",
    tags = [
        # Need to set the pwd to avoid jest needing a runfiles helper
        # Windows users with permissions can use --enable_runfiles
        # to make this test work
        "no-bazelci-windows",
    ],
    deps = [
        "@npm//:node_modules",
    ],
)

nodejs_binary(
    name = "manual",
    bootstrap = ["source-map-support/register"],
    data = [
        ":add",
        "@npm//source-map-support",
    ],
    entry_point = ":src/manual.ts",
)
