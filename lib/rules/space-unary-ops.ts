import { createRule, defineWrapperListener, getCoreRule } from "../utils";
const coreRule = getCoreRule("space-unary-ops");

export default createRule("space-unary-ops", {
  meta: {
    docs: {
      description: "disallow spaces after unary operators",
      recommended: ["json", "jsonc", "json5"],
      extensionRule: true,
      layout: true,
    },
    fixable: coreRule.meta?.fixable,
    hasSuggestions: (coreRule.meta as any).hasSuggestions,
    schema: coreRule.meta!.schema!,
    messages: coreRule.meta!.messages!,
    type: coreRule.meta!.type!,
  },
  create(context) {
    return defineWrapperListener(coreRule, context, [{ nonwords: false }]);
  },
});
