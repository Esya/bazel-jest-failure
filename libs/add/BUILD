package(default_visibility = ["//visibility:public"])

load("@npm_bazel_typescript//:index.bzl", "ts_library", "ts_config")
load("//:jest.bzl", "jest_test")

ts_config(
    name = "tsconfig",
    src = ":tsconfig.json",
    deps = ["//:tsconfig.json"]
)

ts_library(
    name = "add",
    tsconfig = ":tsconfig",
    srcs = glob(["**/*.ts"]),
    module_name = "@demo/add",
    deps = [
      "@npm//@types/jest"
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
		    "@npm//:node_modules"
    ],
)
