package(default_visibility = ["//visibility:public"])

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
