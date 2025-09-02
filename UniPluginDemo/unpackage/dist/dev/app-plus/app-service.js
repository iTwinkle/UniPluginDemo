if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$9 = {};
  function _sfc_render$8(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesDemo4Demo4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/pages/demo4/demo4.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const _sfc_main$8 = {
    __name: "demo3child",
    emits: ["onAaa", "onBbb", "change"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      function onClick() {
        emit("onBbb", Math.random());
      }
      function onInput(e) {
        formatAppLog("log", "at components/demo3child/demo3child.vue:17", e.detail.value);
        emit("change", e.detail.value);
      }
      const __returned__ = { emit, onClick, onInput };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("onAaa", Math.random()))
      }, " 按钮1"),
      vue.createElementVNode("button", { onClick: $setup.onClick }, " 按钮2"),
      vue.createElementVNode(
        "input",
        {
          type: "text",
          onInput: $setup.onInput
        },
        null,
        32
        /* NEED_HYDRATION */
      )
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-7b5f4e45"], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/components/demo3child/demo3child.vue"]]);
  const _sfc_main$7 = {
    __name: "demo3",
    setup(__props, { expose: __expose }) {
      __expose();
      const num = vue.ref(0);
      const color = vue.ref("#ccc");
      const inputStr = vue.ref("123");
      const onAaaClick = function(e) {
        formatAppLog("log", "at pages/demo3/demo3.vue:16", e);
        num.value = e;
        color.value = "#" + String(e).substring(3, 6);
      };
      const onBbbClick = function(e) {
        formatAppLog("log", "at pages/demo3/demo3.vue:23", e);
        num.value = e;
        color.value = "#" + String(e).substring(3, 6);
      };
      const onchange = function(v) {
        inputStr.value = v;
      };
      const __returned__ = { num, color, inputStr, onAaaClick, onBbbClick, onchange, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_demo3child = resolveEasycom(vue.resolveDynamicComponent("demo3child"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_demo3child, {
        onOnAaa: $setup.onAaaClick,
        onOnBbb: $setup.onBbbClick,
        onChange: $setup.onchange
      }),
      vue.createElementVNode(
        "view",
        null,
        " num :" + vue.toDisplayString($setup.num),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "view",
        {
          class: "box",
          style: vue.normalizeStyle({ background: $setup.color })
        },
        null,
        4
        /* STYLE */
      ),
      vue.createElementVNode(
        "view",
        null,
        vue.toDisplayString($setup.inputStr),
        1
        /* TEXT */
      )
    ]);
  }
  const PagesDemo3Demo3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/pages/demo3/demo3.vue"]]);
  const _sfc_main$6 = {};
  function _sfc_render$5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
      vue.createElementVNode("view", { class: "header" }, [
        vue.renderSlot(_ctx.$slots, "header", {}, void 0, true)
      ]),
      vue.createElementVNode("view", { class: "main" }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      vue.createElementVNode("view", { class: "footer" }, [
        vue.renderSlot(_ctx.$slots, "footer", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-e7d81565"], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/components/LayoutContainer/LayoutContainer.vue"]]);
  const _sfc_main$5 = {};
  function _sfc_render$4(_ctx, _cache) {
    const _component_LayoutContainer = resolveEasycom(vue.resolveDynamicComponent("LayoutContainer"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_LayoutContainer, null, {
        header: vue.withCtx(() => [
          vue.createElementVNode("text", null, " 具名插槽 我是头部在父亲自定义")
        ]),
        footer: vue.withCtx(() => [
          vue.createElementVNode("text", null, " 具名插槽 我是尾部在父亲自定义")
        ]),
        default: vue.withCtx(() => [
          vue.createElementVNode("text", null, " 普通插槽 我是内容")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_LayoutContainer, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode(" bbbb")
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesDemo2Demo2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/pages/Demo2/Demo2.vue"]]);
  const _sfc_main$4 = {
    __name: "Home",
    props: ["userName", "age", "sex"],
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      formatAppLog("log", "at components/Home/Home.vue:13", props.userName);
      const ageVlue = vue.computed(() => props.age + "岁");
      const __returned__ = { props, ageVlue, computed: vue.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "userinfo" }, [
      vue.createElementVNode(
        "text",
        { class: "title" },
        vue.toDisplayString($props.userName),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "text",
        { class: "age" },
        vue.toDisplayString($props.age),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "text",
        { class: "sex" },
        vue.toDisplayString($setup.ageVlue),
        1
        /* TEXT */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-a66d8dc5"], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/components/Home/Home.vue"]]);
  const _sfc_main$3 = {
    __name: "UserInfo",
    props: {
      username: {
        type: String,
        default: "匿名"
      },
      age: Number,
      sex: Boolean
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const sexVlue = vue.computed(
        () => {
          return props.sex ? "男" : "女";
        }
      );
      const props = __props;
      const __returned__ = { sexVlue, props, computed: vue.computed };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "userinfo" }, [
      vue.createElementVNode(
        "text",
        { class: "title" },
        vue.toDisplayString($props.username),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "text",
        { class: "age" },
        vue.toDisplayString($props.age),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "text",
        { class: "sex" },
        vue.toDisplayString($setup.sexVlue),
        1
        /* TEXT */
      )
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-1e7cdf7b"], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/components/UserInfo/UserInfo.vue"]]);
  const _sfc_main$2 = {
    __name: "demo1",
    props: {
      obj: {
        type: Object,
        default() {
          return { username: "里斯", age: "22", sex: "flase" };
        }
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = {};
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "text",
        null,
        vue.toDisplayString($props.obj.username),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "text",
        null,
        vue.toDisplayString($props.obj.age),
        1
        /* TEXT */
      ),
      vue.createElementVNode(
        "text",
        null,
        vue.toDisplayString($props.obj.sex),
        1
        /* TEXT */
      )
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/components/demo1/demo1.vue"]]);
  const _sfc_main$1 = {
    __name: "index",
    setup(__props, { expose: __expose }) {
      __expose();
      const name = vue.ref("王五");
      const age = vue.ref("18");
      const sex = vue.ref("男");
      const userinfos = vue.ref([
        { username: "张三疯", age: "18", sex: true },
        { username: "张三", age: "18", sex: true },
        { username: "王五", age: "19", sex: true }
      ]);
      const __returned__ = { name, age, sex, userinfos, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Home = resolveEasycom(vue.resolveDynamicComponent("Home"), __easycom_0);
    const _component_UserInfo = resolveEasycom(vue.resolveDynamicComponent("UserInfo"), __easycom_1);
    const _component_demo1 = resolveEasycom(vue.resolveDynamicComponent("demo1"), __easycom_2);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_Home, {
          userName: $setup.name,
          age: $setup.age,
          sex: $setup.sex
        }, null, 8, ["userName", "age", "sex"]),
        vue.createVNode(_component_UserInfo, {
          username: $setup.name,
          age: 18,
          sex: true
        }, null, 8, ["username"]),
        vue.createVNode(_component_UserInfo, {
          age: 29,
          sex: _ctx.flase
        }, null, 8, ["sex"]),
        vue.createCommentVNode(" <demo1 :obj='userinfo'></demo1> "),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($setup.userinfos, (item, index) => {
            return vue.openBlock(), vue.createBlock(_component_demo1, { obj: item }, null, 8, ["obj"]);
          }),
          256
          /* UNKEYED_FRAGMENT */
        ))
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/pages/index/index.vue"]]);
  __definePage("pages/demo4/demo4", PagesDemo4Demo4);
  __definePage("pages/demo3/demo3", PagesDemo3Demo3);
  __definePage("pages/Demo2/Demo2", PagesDemo2Demo2);
  __definePage("pages/index/index", PagesIndexIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/twinkle/Desktop/UniPluginDemo/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
