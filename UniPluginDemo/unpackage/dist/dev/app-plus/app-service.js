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
  const _sfc_main$f = {};
  function _sfc_render$e(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 主页 ");
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/pages/Home/Home.vue"]]);
  const ON_SHOW = "onShow";
  const ON_HIDE = "onHide";
  const ON_LOAD = "onLoad";
  const ON_READY = "onReady";
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
  const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createLifeCycleHook(
    ON_SHOW,
    1 | 2
    /* HookFlags.PAGE */
  );
  const onHide = /* @__PURE__ */ createLifeCycleHook(
    ON_HIDE,
    1 | 2
    /* HookFlags.PAGE */
  );
  const onLoad = /* @__PURE__ */ createLifeCycleHook(
    ON_LOAD,
    2
    /* HookFlags.PAGE */
  );
  const onReady = /* @__PURE__ */ createLifeCycleHook(
    ON_READY,
    2
    /* HookFlags.PAGE */
  );
  const _sfc_main$e = {
    __name: "DemoList",
    setup(__props, { expose: __expose }) {
      __expose();
      const dataArray = vue.ref([]);
      const list = vue.ref([
        "v-bind",
        "slot--插槽",
        "emit",
        "生命周期",
        "navigateTo",
        "reLaunch",
        "request"
      ]);
      function selectRow(index) {
        formatAppLog("log", "at pages/DemoList/DemoList.vue:34", index === 0);
        if (index === 0) {
          uni.navigateTo({
            url: `/pages/index/index`
          });
        } else if (index === 1) {
          uni.navigateTo({
            url: `/pages/Demo2/Demo2`
          });
        } else if (index === 2) {
          uni.navigateTo({
            url: `/pages/demo3/demo3`
          });
        } else if (index === 3) {
          uni.navigateTo({
            url: `/pages/demo4/demo4`
          });
        } else if (index === 4) {
          uni.navigateTo({
            url: `/pages/Demo5/Demo5?name='张三丰'&age=18`
          });
        } else if (index === 5) {
          uni.reLaunch({
            url: `/pages/Home/Home`
          });
        } else if (index === 6) {
          uni.navigateTo({
            url: `/pages/Demo6/Demo6`
          });
        }
      }
      const __returned__ = { dataArray, list, selectRow, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("scroll-view", {
      "scroll-y": "",
      style: { "height": "100vh" }
    }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($setup.list, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index,
            class: "list-item",
            onClick: ($event) => $setup.selectRow(index)
          }, vue.toDisplayString(index + 1) + " - " + vue.toDisplayString(item), 9, ["onClick"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesDemoListDemoList = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-6118f3db"], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/pages/DemoList/DemoList.vue"]]);
  const _sfc_main$d = {};
  function _sfc_render$c(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 关于 ");
  }
  const PagesAboutAbout = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/pages/About/About.vue"]]);
  const _sfc_main$c = {
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
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-a66d8dc5"], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/components/Home/Home.vue"]]);
  const _sfc_main$b = {
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
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-1e7cdf7b"], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/components/UserInfo/UserInfo.vue"]]);
  const _sfc_main$a = {
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
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/components/demo1/demo1.vue"]]);
  const _sfc_main$9 = {
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
      function showModal() {
        uni.showModal({
          title: "是否删除",
          content: "确认要删除吗",
          showCancel: true,
          cancelText: "删除",
          confirmText: "确认",
          success: (res) => {
          },
          fail: () => {
          },
          complete: () => {
          }
        });
      }
      let arrs = ["高中", "本科", "大专"];
      function showshet() {
        uni.showActionSheet({
          title: "请选择",
          itemList: arrs,
          success: (res) => {
            formatAppLog("log", "at pages/index/index.vue:42", res.tapIndex);
            formatAppLog("log", "at pages/index/index.vue:43", arrs[res.tapIndex]);
          },
          fail: () => {
          },
          complete: () => {
          }
        });
      }
      const __returned__ = { name, age, sex, userinfos, showModal, get arrs() {
        return arrs;
      }, set arrs(v) {
        arrs = v;
      }, showshet, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Home = resolveEasycom(vue.resolveDynamicComponent("Home"), __easycom_0$3);
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
        )),
        vue.createElementVNode("button", { onClick: $setup.showModal }, "showModal"),
        vue.createElementVNode("button", { onClick: $setup.showshet }, "showShet")
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/pages/index/index.vue"]]);
  const _sfc_main$8 = {};
  function _sfc_render$7(_ctx, _cache) {
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
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-e7d81565"], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/components/LayoutContainer/LayoutContainer.vue"]]);
  const _sfc_main$7 = {};
  function _sfc_render$6(_ctx, _cache) {
    const _component_LayoutContainer = resolveEasycom(vue.resolveDynamicComponent("LayoutContainer"), __easycom_0$2);
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
  const PagesDemo2Demo2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/pages/Demo2/Demo2.vue"]]);
  const _sfc_main$6 = {
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
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-7b5f4e45"], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/components/demo3child/demo3child.vue"]]);
  const _sfc_main$5 = {
    __name: "demo3",
    setup(__props, { expose: __expose }) {
      __expose();
      const num = vue.ref(0);
      const color = vue.ref("#ccc");
      const inputStr = vue.ref("123");
      const name = vue.ref("张三");
      const age = vue.ref("18");
      const onAaaClick = function(e) {
        formatAppLog("log", "at pages/demo3/demo3.vue:24", e);
        num.value = e;
        color.value = "#" + String(e).substring(3, 6);
      };
      const onBbbClick = function(e) {
        formatAppLog("log", "at pages/demo3/demo3.vue:31", e);
        num.value = e;
        color.value = "#" + String(e).substring(3, 6);
      };
      const onchange = function(v) {
        inputStr.value = v;
      };
      onLoad((e) => {
        formatAppLog("log", "at pages/demo3/demo3.vue:42", "onLoad 函数");
        name.value = e.name;
        age.value = e.age;
      });
      onShow((e) => {
        formatAppLog("log", "at pages/demo3/demo3.vue:48", "onShow 函数");
      });
      onHide((e) => {
        formatAppLog("log", "at pages/demo3/demo3.vue:53", "onHide 函数");
      });
      onReady((e) => {
        formatAppLog("log", "at pages/demo3/demo3.vue:60", "onReady 函数");
      });
      const __returned__ = { num, color, inputStr, name, age, onAaaClick, onBbbClick, onchange, ref: vue.ref, get onLoad() {
        return onLoad;
      }, get onReady() {
        return onReady;
      }, get onShow() {
        return onShow;
      }, get onHide() {
        return onHide;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_demo3child = resolveEasycom(vue.resolveDynamicComponent("demo3child"), __easycom_0$1);
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
      ),
      vue.createElementVNode(
        "view",
        null,
        vue.toDisplayString($setup.name) + " " + vue.toDisplayString($setup.age),
        1
        /* TEXT */
      ),
      vue.createElementVNode("navigator", { url: "/pages/Demo2/Demo2" }, "跳转到Demo2")
    ]);
  }
  const PagesDemo3Demo3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/pages/demo3/demo3.vue"]]);
  const _sfc_main$4 = {
    __name: "Demo4Childe",
    setup(__props, { expose: __expose }) {
      __expose();
      const name = vue.ref("张三");
      onLoad(() => {
        name.value = "里斯";
        formatAppLog("log", "at components/Demo4Childe/Demo4Childe.vue:13", "onLoad 函数");
      });
      onReady(() => {
      });
      const __returned__ = { name, ref: vue.ref, get onLoad() {
        return onLoad;
      }, get onReady() {
        return onReady;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 4444444 ");
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/components/Demo4Childe/Demo4Childe.vue"]]);
  const _sfc_main$3 = {
    __name: "demo4",
    setup(__props, { expose: __expose }) {
      __expose();
      const child = vue.ref(null);
      const update = function() {
      };
      const __returned__ = { child, update, onMounted: vue.onMounted, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Demo4Childe = resolveEasycom(vue.resolveDynamicComponent("Demo4Childe"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_Demo4Childe),
      vue.createElementVNode("view", null, "--------"),
      vue.createElementVNode("navigator", { url: "/pages/demo3/demo3?name=王五&age=19" }, "跳转到demo3")
    ]);
  }
  const PagesDemo4Demo4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/pages/demo4/demo4.vue"]]);
  const _sfc_main$2 = {
    __name: "Demo5",
    setup(__props, { expose: __expose }) {
      __expose();
      onLoad((e) => {
        formatAppLog("log", "at pages/Demo5/Demo5.vue:10", `onLoad 函数 ${e.name} ${e.age}`);
        formatAppLog("log", "at pages/Demo5/Demo5.vue:11", "onLoad 函数 " + e.name + " " + e.age);
      });
      const __returned__ = { get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesDemo5Demo5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/pages/Demo5/Demo5.vue"]]);
  const _sfc_main$1 = {
    __name: "Demo6",
    setup(__props, { expose: __expose }) {
      __expose();
      const dataArray = vue.ref([]);
      onLoad((e) => {
        formatAppLog("log", "at pages/Demo6/Demo6.vue:18", "onLoad 函数");
        request2();
      });
      function request() {
        uni.request({
          url: "https://jsonplaceholder.typicode.com/posts",
          success: (res) => {
            formatAppLog("log", "at pages/Demo6/Demo6.vue:27", res.data);
            dataArray.value = res.data;
          }
        });
      }
      function request1() {
        uni.request({
          url: "https://jsonplaceholder.typicode.com/posts"
        }).then((res) => {
          formatAppLog("log", "at pages/Demo6/Demo6.vue:38", res.data);
          dataArray.value = res.data;
        });
      }
      async function request2() {
        let res = await uni.request({
          url: "https://jsonplaceholder.typicode.com/posts",
          data: {
            id: "1"
          },
          method: "GET",
          header: {
            token: "adddas"
          }
        });
        formatAppLog("log", "at pages/Demo6/Demo6.vue:57", res.data);
        dataArray.value = res.data;
      }
      const __returned__ = { dataArray, request, request1, request2, get onLoad() {
        return onLoad;
      }, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(true), vue.createElementBlock(
      vue.Fragment,
      null,
      vue.renderList($setup.dataArray, (dataInfo, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: dataInfo.id,
          class: "list-item"
        }, [
          vue.createElementVNode(
            "view",
            null,
            vue.toDisplayString(dataInfo.title),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            null,
            vue.toDisplayString(dataInfo.body),
            1
            /* TEXT */
          )
        ]);
      }),
      128
      /* KEYED_FRAGMENT */
    );
  }
  const PagesDemo6Demo6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/pages/Demo6/Demo6.vue"]]);
  __definePage("pages/Home/Home", PagesHomeHome);
  __definePage("pages/DemoList/DemoList", PagesDemoListDemoList);
  __definePage("pages/About/About", PagesAboutAbout);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/Demo2/Demo2", PagesDemo2Demo2);
  __definePage("pages/demo3/demo3", PagesDemo3Demo3);
  __definePage("pages/demo4/demo4", PagesDemo4Demo4);
  __definePage("pages/Demo5/Demo5", PagesDemo5Demo5);
  __definePage("pages/Demo6/Demo6", PagesDemo6Demo6);
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
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/twinkle/Desktop/UniPluginDemo/UniPluginDemo/App.vue"]]);
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
