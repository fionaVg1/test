var Fr = Object.defineProperty;
var Bn = Object.getOwnPropertySymbols;
var Br = Object.prototype.hasOwnProperty
  , xr = Object.prototype.propertyIsEnumerable;
var Ne = (e, t, r) => t in e ? Fr(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : e[t] = r
  , Me = (e, t) => {
    for (var r in t || (t = {}))
      Br.call(t, r) && Ne(e, r, t[r]);
    if (Bn)
      for (var r of Bn(t))
        xr.call(t, r) && Ne(e, r, t[r]);
    return e
  }
  ;
var de = (e, t, r) => (Ne(e, typeof t != "symbol" ? t + "" : t, r),
  r);
import { s as Nt, d as ft, r as K, o as T, c as I, t as q, a as z, b as Ct, e as At, f as br, u as kt, g as Ht, h as ee, i as f, w as ge, F as nt, j as Lt, n as rt, k as x, l as jn, m as ne, p as _e, q as Fe, v as Ye, x as sn, y as Hn, z as on } from "./index.aeaeea3f.js";
var Ar = "/html/yys20220601/assets/header-paperman.df7995f3.png"
  , an = {
    exports: {}
  }
  , qn = function (t, r) {
    return function () {
      for (var n = new Array(arguments.length), s = 0; s < n.length; s++)
        n[s] = arguments[s];
      return t.apply(r, n)
    }
  }
  , kr = qn
  , un = Object.prototype.toString
  , ln = function (e) {
    return function (t) {
      var r = un.call(t);
      return e[r] || (e[r] = r.slice(8, -1).toLowerCase())
    }
  }(Object.create(null));
function zt(e) {
  return e = e.toLowerCase(),
    function (r) {
      return ln(r) === e
    }
}
function cn(e) {
  return Array.isArray(e)
}
function we(e) {
  return typeof e == "undefined"
}
function Tr(e) {
  return e !== null && !we(e) && e.constructor !== null && !we(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}
var zn = zt("ArrayBuffer");
function Sr(e) {
  var t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && zn(e.buffer),
    t
}
function Ir(e) {
  return typeof e == "string"
}
function Dr(e) {
  return typeof e == "number"
}
function Vn(e) {
  return e !== null && typeof e == "object"
}
function me(e) {
  if (ln(e) !== "object")
    return !1;
  var t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype
}
var Rr = zt("Date")
  , Lr = zt("File")
  , $r = zt("Blob")
  , Pr = zt("FileList");
function dn(e) {
  return un.call(e) === "[object Function]"
}
function Nr(e) {
  return Vn(e) && dn(e.pipe)
}
function Mr(e) {
  var t = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || un.call(e) === t || dn(e.toString) && e.toString() === t)
}
var Or = zt("URLSearchParams");
function Ur(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
}
function jr() {
  return typeof navigator != "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window != "undefined" && typeof document != "undefined"
}
function hn(e, t) {
  if (!(e === null || typeof e == "undefined"))
    if (typeof e != "object" && (e = [e]),
      cn(e))
      for (var r = 0, o = e.length; r < o; r++)
        t.call(null, e[r], r, e);
    else
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.call(null, e[n], n, e)
}
function Qe() {
  var e = {};
  function t(n, s) {
    me(e[s]) && me(n) ? e[s] = Qe(e[s], n) : me(n) ? e[s] = Qe({}, n) : cn(n) ? e[s] = n.slice() : e[s] = n
  }
  for (var r = 0, o = arguments.length; r < o; r++)
    hn(arguments[r], t);
  return e
}
function Hr(e, t, r) {
  return hn(t, function (n, s) {
    r && typeof n == "function" ? e[s] = kr(n, r) : e[s] = n
  }),
    e
}
function qr(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)),
    e
}
function zr(e, t, r, o) {
  e.prototype = Object.create(t.prototype, o),
    e.prototype.constructor = e,
    r && Object.assign(e.prototype, r)
}
function Vr(e, t, r) {
  var o, n, s, i = {};
  t = t || {};
  do {
    for (o = Object.getOwnPropertyNames(e),
      n = o.length; n-- > 0;)
      s = o[n],
        i[s] || (t[s] = e[s],
          i[s] = !0);
    e = Object.getPrototypeOf(e)
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t
}
function Wr(e, t, r) {
  e = String(e),
    (r === void 0 || r > e.length) && (r = e.length),
    r -= t.length;
  var o = e.indexOf(t, r);
  return o !== -1 && o === r
}
function Gr(e) {
  if (!e)
    return null;
  var t = e.length;
  if (we(t))
    return null;
  for (var r = new Array(t); t-- > 0;)
    r[t] = e[t];
  return r
}
var Jr = function (e) {
  return function (t) {
    return e && t instanceof e
  }
}(typeof Uint8Array != "undefined" && Object.getPrototypeOf(Uint8Array))
  , ut = {
    isArray: cn,
    isArrayBuffer: zn,
    isBuffer: Tr,
    isFormData: Mr,
    isArrayBufferView: Sr,
    isString: Ir,
    isNumber: Dr,
    isObject: Vn,
    isPlainObject: me,
    isUndefined: we,
    isDate: Rr,
    isFile: Lr,
    isBlob: $r,
    isFunction: dn,
    isStream: Nr,
    isURLSearchParams: Or,
    isStandardBrowserEnv: jr,
    forEach: hn,
    merge: Qe,
    extend: Hr,
    trim: Ur,
    stripBOM: qr,
    inherits: zr,
    toFlatObject: Vr,
    kindOf: ln,
    kindOfTest: zt,
    endsWith: Wr,
    toArray: Gr,
    isTypedArray: Jr,
    isFileList: Pr
  }
  , Wt = ut;
function xn(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
var Wn = function (t, r, o) {
  if (!r)
    return t;
  var n;
  if (o)
    n = o(r);
  else if (Wt.isURLSearchParams(r))
    n = r.toString();
  else {
    var s = [];
    Wt.forEach(r, function (a, c) {
      a === null || typeof a == "undefined" || (Wt.isArray(a) ? c = c + "[]" : a = [a],
        Wt.forEach(a, function (g) {
          Wt.isDate(g) ? g = g.toISOString() : Wt.isObject(g) && (g = JSON.stringify(g)),
            s.push(xn(c) + "=" + xn(g))
        }))
    }),
      n = s.join("&")
  }
  if (n) {
    var i = t.indexOf("#");
    i !== -1 && (t = t.slice(0, i)),
      t += (t.indexOf("?") === -1 ? "?" : "&") + n
  }
  return t
}
  , Yr = ut;
function Be() {
  this.handlers = []
}
Be.prototype.use = function (t, r, o) {
  return this.handlers.push({
    fulfilled: t,
    rejected: r,
    synchronous: o ? o.synchronous : !1,
    runWhen: o ? o.runWhen : null
  }),
    this.handlers.length - 1
}
  ;
Be.prototype.eject = function (t) {
  this.handlers[t] && (this.handlers[t] = null)
}
  ;
Be.prototype.forEach = function (t) {
  Yr.forEach(this.handlers, function (o) {
    o !== null && t(o)
  })
}
  ;
var Qr = Be
  , Xr = ut
  , Kr = function (t, r) {
    Xr.forEach(t, function (n, s) {
      s !== r && s.toUpperCase() === r.toUpperCase() && (t[r] = n,
        delete t[s])
    })
  }
  , Gn = ut;
function Jt(e, t, r, o, n) {
  Error.call(this),
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    r && (this.config = r),
    o && (this.request = o),
    n && (this.response = n)
}
Gn.inherits(Jt, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    }
  }
});
var Jn = Jt.prototype
  , Yn = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach(function (e) {
  Yn[e] = {
    value: e
  }
});
Object.defineProperties(Jt, Yn);
Object.defineProperty(Jn, "isAxiosError", {
  value: !0
});
Jt.from = function (e, t, r, o, n, s) {
  var i = Object.create(Jn);
  return Gn.toFlatObject(e, i, function (a) {
    return a !== Error.prototype
  }),
    Jt.call(i, e.message, t, r, o, n),
    i.name = e.name,
    s && Object.assign(i, s),
    i
}
  ;
var re = Jt
  , Qn = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  }
  , Bt = ut;
function Zr(e, t) {
  t = t || new FormData;
  var r = [];
  function o(s) {
    return s === null ? "" : Bt.isDate(s) ? s.toISOString() : Bt.isArrayBuffer(s) || Bt.isTypedArray(s) ? typeof Blob == "function" ? new Blob([s]) : Buffer.from(s) : s
  }
  function n(s, i) {
    if (Bt.isPlainObject(s) || Bt.isArray(s)) {
      if (r.indexOf(s) !== -1)
        throw Error("Circular reference detected in " + i);
      r.push(s),
        Bt.forEach(s, function (a, c) {
          if (!Bt.isUndefined(a)) {
            var d = i ? i + "." + c : c, g;
            if (a && !i && typeof a == "object") {
              if (Bt.endsWith(c, "{}"))
                a = JSON.stringify(a);
              else if (Bt.endsWith(c, "[]") && (g = Bt.toArray(a))) {
                g.forEach(function (F) {
                  !Bt.isUndefined(F) && t.append(d, o(F))
                });
                return
              }
            }
            n(a, d)
          }
        }),
        r.pop()
    } else
      t.append(i, o(s))
  }
  return n(e),
    t
}
var Xn = Zr
  , Oe = re
  , ts = function (t, r, o) {
    var n = o.config.validateStatus;
    !o.status || !n || n(o.status) ? t(o) : r(new Oe("Request failed with status code " + o.status, [Oe.ERR_BAD_REQUEST, Oe.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4], o.config, o.request, o))
  }
  , he = ut
  , es = he.isStandardBrowserEnv() ? function () {
    return {
      write: function (r, o, n, s, i, u) {
        var a = [];
        a.push(r + "=" + encodeURIComponent(o)),
          he.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
          he.isString(s) && a.push("path=" + s),
          he.isString(i) && a.push("domain=" + i),
          u === !0 && a.push("secure"),
          document.cookie = a.join("; ")
      },
      read: function (r) {
        var o = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return o ? decodeURIComponent(o[3]) : null
      },
      remove: function (r) {
        this.write(r, "", Date.now() - 864e5)
      }
    }
  }() : function () {
    return {
      write: function () { },
      read: function () {
        return null
      },
      remove: function () { }
    }
  }()
  , ns = function (t) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
  }
  , rs = function (t, r) {
    return r ? t.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : t
  }
  , ss = ns
  , os = rs
  , Kn = function (t, r) {
    return t && !ss(r) ? os(t, r) : r
  }
  , Ue = ut
  , is = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]
  , as = function (t) {
    var r = {}, o, n, s;
    return t && Ue.forEach(t.split(`
`), function (u) {
      if (s = u.indexOf(":"),
        o = Ue.trim(u.substr(0, s)).toLowerCase(),
        n = Ue.trim(u.substr(s + 1)),
        o) {
        if (r[o] && is.indexOf(o) >= 0)
          return;
        o === "set-cookie" ? r[o] = (r[o] ? r[o] : []).concat([n]) : r[o] = r[o] ? r[o] + ", " + n : n
      }
    }),
      r
  }
  , bn = ut
  , us = bn.isStandardBrowserEnv() ? function () {
    var t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"), o;
    function n(s) {
      var i = s;
      return t && (r.setAttribute("href", i),
        i = r.href),
        r.setAttribute("href", i),
      {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      }
    }
    return o = n(window.location.href),
      function (i) {
        var u = bn.isString(i) ? n(i) : i;
        return u.protocol === o.protocol && u.host === o.host
      }
  }() : function () {
    return function () {
      return !0
    }
  }()
  , Xe = re
  , ls = ut;
function Zn(e) {
  Xe.call(this, e == null ? "canceled" : e, Xe.ERR_CANCELED),
    this.name = "CanceledError"
}
ls.inherits(Zn, Xe, {
  __CANCEL__: !0
});
var xe = Zn
  , cs = function (t) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return r && r[1] || ""
  }
  , ae = ut
  , ds = ts
  , hs = es
  , fs = Wn
  , ps = Kn
  , gs = as
  , ms = us
  , vs = Qn
  , Dt = re
  , ys = xe
  , ws = cs
  , An = function (t) {
    return new Promise(function (o, n) {
      var s = t.data, i = t.headers, u = t.responseType, a;
      function c() {
        t.cancelToken && t.cancelToken.unsubscribe(a),
          t.signal && t.signal.removeEventListener("abort", a)
      }
      ae.isFormData(s) && ae.isStandardBrowserEnv() && delete i["Content-Type"];
      var d = new XMLHttpRequest;
      if (t.auth) {
        var g = t.auth.username || ""
          , F = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
        i.Authorization = "Basic " + btoa(g + ":" + F)
      }
      var E = ps(t.baseURL, t.url);
      d.open(t.method.toUpperCase(), fs(E, t.params, t.paramsSerializer), !0),
        d.timeout = t.timeout;
      function h() {
        if (!!d) {
          var v = "getAllResponseHeaders" in d ? gs(d.getAllResponseHeaders()) : null
            , _ = !u || u === "text" || u === "json" ? d.responseText : d.response
            , y = {
              data: _,
              status: d.status,
              statusText: d.statusText,
              headers: v,
              config: t,
              request: d
            };
          ds(function (S) {
            o(S),
              c()
          }, function (S) {
            n(S),
              c()
          }, y),
            d = null
        }
      }
      if ("onloadend" in d ? d.onloadend = h : d.onreadystatechange = function () {
        !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(h)
      }
        ,
        d.onabort = function () {
          !d || (n(new Dt("Request aborted", Dt.ECONNABORTED, t, d)),
            d = null)
        }
        ,
        d.onerror = function () {
          n(new Dt("Network Error", Dt.ERR_NETWORK, t, d, d)),
            d = null
        }
        ,
        d.ontimeout = function () {
          var _ = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded"
            , y = t.transitional || vs;
          t.timeoutErrorMessage && (_ = t.timeoutErrorMessage),
            n(new Dt(_, y.clarifyTimeoutError ? Dt.ETIMEDOUT : Dt.ECONNABORTED, t, d)),
            d = null
        }
        ,
        ae.isStandardBrowserEnv()) {
        var p = (t.withCredentials || ms(E)) && t.xsrfCookieName ? hs.read(t.xsrfCookieName) : void 0;
        p && (i[t.xsrfHeaderName] = p)
      }
      "setRequestHeader" in d && ae.forEach(i, function (_, y) {
        typeof s == "undefined" && y.toLowerCase() === "content-type" ? delete i[y] : d.setRequestHeader(y, _)
      }),
        ae.isUndefined(t.withCredentials) || (d.withCredentials = !!t.withCredentials),
        u && u !== "json" && (d.responseType = t.responseType),
        typeof t.onDownloadProgress == "function" && d.addEventListener("progress", t.onDownloadProgress),
        typeof t.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", t.onUploadProgress),
        (t.cancelToken || t.signal) && (a = function (v) {
          !d || (n(!v || v && v.type ? new ys : v),
            d.abort(),
            d = null)
        }
          ,
          t.cancelToken && t.cancelToken.subscribe(a),
          t.signal && (t.signal.aborted ? a() : t.signal.addEventListener("abort", a))),
        s || (s = null);
      var m = ws(E);
      if (m && ["http", "https", "file"].indexOf(m) === -1) {
        n(new Dt("Unsupported protocol " + m + ":", Dt.ERR_BAD_REQUEST, t));
        return
      }
      d.send(s)
    }
    )
  }
  , Es = null
  , ot = ut
  , kn = Kr
  , Tn = re
  , Cs = Qn
  , _s = Xn
  , Fs = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
function Sn(e, t) {
  !ot.isUndefined(e) && ot.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
}
function Bs() {
  var e;
  return (typeof XMLHttpRequest != "undefined" || typeof process != "undefined" && Object.prototype.toString.call(process) === "[object process]") && (e = An),
    e
}
function xs(e, t, r) {
  if (ot.isString(e))
    try {
      return (t || JSON.parse)(e),
        ot.trim(e)
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o
    }
  return (r || JSON.stringify)(e)
}
var be = {
  transitional: Cs,
  adapter: Bs(),
  transformRequest: [function (t, r) {
    if (kn(r, "Accept"),
      kn(r, "Content-Type"),
      ot.isFormData(t) || ot.isArrayBuffer(t) || ot.isBuffer(t) || ot.isStream(t) || ot.isFile(t) || ot.isBlob(t))
      return t;
    if (ot.isArrayBufferView(t))
      return t.buffer;
    if (ot.isURLSearchParams(t))
      return Sn(r, "application/x-www-form-urlencoded;charset=utf-8"),
        t.toString();
    var o = ot.isObject(t), n = r && r["Content-Type"], s;
    if ((s = ot.isFileList(t)) || o && n === "multipart/form-data") {
      var i = this.env && this.env.FormData;
      return _s(s ? {
        "files[]": t
      } : t, i && new i)
    } else if (o || n === "application/json")
      return Sn(r, "application/json"),
        xs(t);
    return t
  }
  ],
  transformResponse: [function (t) {
    var r = this.transitional || be.transitional
      , o = r && r.silentJSONParsing
      , n = r && r.forcedJSONParsing
      , s = !o && this.responseType === "json";
    if (s || n && ot.isString(t) && t.length)
      try {
        return JSON.parse(t)
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? Tn.from(i, Tn.ERR_BAD_RESPONSE, this, null, this.response) : i
      }
    return t
  }
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Es
  },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
ot.forEach(["delete", "get", "head"], function (t) {
  be.headers[t] = {}
});
ot.forEach(["post", "put", "patch"], function (t) {
  be.headers[t] = ot.merge(Fs)
});
var fn = be
  , bs = ut
  , As = fn
  , ks = function (t, r, o) {
    var n = this || As;
    return bs.forEach(o, function (i) {
      t = i.call(n, t, r)
    }),
      t
  }
  , tr = function (t) {
    return !!(t && t.__CANCEL__)
  }
  , In = ut
  , je = ks
  , Ts = tr
  , Ss = fn
  , Is = xe;
function He(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
    throw new Is
}
var Ds = function (t) {
  He(t),
    t.headers = t.headers || {},
    t.data = je.call(t, t.data, t.headers, t.transformRequest),
    t.headers = In.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers),
    In.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (n) {
      delete t.headers[n]
    });
  var r = t.adapter || Ss.adapter;
  return r(t).then(function (n) {
    return He(t),
      n.data = je.call(t, n.data, n.headers, t.transformResponse),
      n
  }, function (n) {
    return Ts(n) || (He(t),
      n && n.response && (n.response.data = je.call(t, n.response.data, n.response.headers, t.transformResponse))),
      Promise.reject(n)
  })
}
  , mt = ut
  , er = function (t, r) {
    r = r || {};
    var o = {};
    function n(d, g) {
      return mt.isPlainObject(d) && mt.isPlainObject(g) ? mt.merge(d, g) : mt.isPlainObject(g) ? mt.merge({}, g) : mt.isArray(g) ? g.slice() : g
    }
    function s(d) {
      if (mt.isUndefined(r[d])) {
        if (!mt.isUndefined(t[d]))
          return n(void 0, t[d])
      } else
        return n(t[d], r[d])
    }
    function i(d) {
      if (!mt.isUndefined(r[d]))
        return n(void 0, r[d])
    }
    function u(d) {
      if (mt.isUndefined(r[d])) {
        if (!mt.isUndefined(t[d]))
          return n(void 0, t[d])
      } else
        return n(void 0, r[d])
    }
    function a(d) {
      if (d in r)
        return n(t[d], r[d]);
      if (d in t)
        return n(void 0, t[d])
    }
    var c = {
      url: i,
      method: i,
      data: i,
      baseURL: u,
      transformRequest: u,
      transformResponse: u,
      paramsSerializer: u,
      timeout: u,
      timeoutMessage: u,
      withCredentials: u,
      adapter: u,
      responseType: u,
      xsrfCookieName: u,
      xsrfHeaderName: u,
      onUploadProgress: u,
      onDownloadProgress: u,
      decompress: u,
      maxContentLength: u,
      maxBodyLength: u,
      beforeRedirect: u,
      transport: u,
      httpAgent: u,
      httpsAgent: u,
      cancelToken: u,
      socketPath: u,
      responseEncoding: u,
      validateStatus: a
    };
    return mt.forEach(Object.keys(t).concat(Object.keys(r)), function (g) {
      var F = c[g] || s
        , E = F(g);
      mt.isUndefined(E) && F !== a || (o[g] = E)
    }),
      o
  }
  , nr = {
    version: "0.27.2"
  }
  , Rs = nr.version
  , Mt = re
  , pn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function (e, t) {
  pn[e] = function (o) {
    return typeof o === e || "a" + (t < 1 ? "n " : " ") + e
  }
});
var Dn = {};
pn.transitional = function (t, r, o) {
  function n(s, i) {
    return "[Axios v" + Rs + "] Transitional option '" + s + "'" + i + (o ? ". " + o : "")
  }
  return function (s, i, u) {
    if (t === !1)
      throw new Mt(n(i, " has been removed" + (r ? " in " + r : "")), Mt.ERR_DEPRECATED);
    return r && !Dn[i] && (Dn[i] = !0,
      console.warn(n(i, " has been deprecated since v" + r + " and will be removed in the near future"))),
      t ? t(s, i, u) : !0
  }
}
  ;
function Ls(e, t, r) {
  if (typeof e != "object")
    throw new Mt("options must be an object", Mt.ERR_BAD_OPTION_VALUE);
  for (var o = Object.keys(e), n = o.length; n-- > 0;) {
    var s = o[n]
      , i = t[s];
    if (i) {
      var u = e[s]
        , a = u === void 0 || i(u, s, e);
      if (a !== !0)
        throw new Mt("option " + s + " must be " + a, Mt.ERR_BAD_OPTION_VALUE);
      continue
    }
    if (r !== !0)
      throw new Mt("Unknown option " + s, Mt.ERR_BAD_OPTION)
  }
}
var $s = {
  assertOptions: Ls,
  validators: pn
}
  , rr = ut
  , Ps = Wn
  , Rn = Qr
  , Ln = Ds
  , Ae = er
  , Ns = Kn
  , sr = $s
  , Gt = sr.validators;
function Yt(e) {
  this.defaults = e,
    this.interceptors = {
      request: new Rn,
      response: new Rn
    }
}
Yt.prototype.request = function (t, r) {
  typeof t == "string" ? (r = r || {},
    r.url = t) : r = t || {},
    r = Ae(this.defaults, r),
    r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var o = r.transitional;
  o !== void 0 && sr.assertOptions(o, {
    silentJSONParsing: Gt.transitional(Gt.boolean),
    forcedJSONParsing: Gt.transitional(Gt.boolean),
    clarifyTimeoutError: Gt.transitional(Gt.boolean)
  }, !1);
  var n = []
    , s = !0;
  this.interceptors.request.forEach(function (E) {
    typeof E.runWhen == "function" && E.runWhen(r) === !1 || (s = s && E.synchronous,
      n.unshift(E.fulfilled, E.rejected))
  });
  var i = [];
  this.interceptors.response.forEach(function (E) {
    i.push(E.fulfilled, E.rejected)
  });
  var u;
  if (!s) {
    var a = [Ln, void 0];
    for (Array.prototype.unshift.apply(a, n),
      a = a.concat(i),
      u = Promise.resolve(r); a.length;)
      u = u.then(a.shift(), a.shift());
    return u
  }
  for (var c = r; n.length;) {
    var d = n.shift()
      , g = n.shift();
    try {
      c = d(c)
    } catch (F) {
      g(F);
      break
    }
  }
  try {
    u = Ln(c)
  } catch (F) {
    return Promise.reject(F)
  }
  for (; i.length;)
    u = u.then(i.shift(), i.shift());
  return u
}
  ;
Yt.prototype.getUri = function (t) {
  t = Ae(this.defaults, t);
  var r = Ns(t.baseURL, t.url);
  return Ps(r, t.params, t.paramsSerializer)
}
  ;
rr.forEach(["delete", "get", "head", "options"], function (t) {
  Yt.prototype[t] = function (r, o) {
    return this.request(Ae(o || {}, {
      method: t,
      url: r,
      data: (o || {}).data
    }))
  }
});
rr.forEach(["post", "put", "patch"], function (t) {
  function r(o) {
    return function (s, i, u) {
      return this.request(Ae(u || {}, {
        method: t,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: i
      }))
    }
  }
  Yt.prototype[t] = r(),
    Yt.prototype[t + "Form"] = r(!0)
});
var Ms = Yt
  , Os = xe;
function Qt(e) {
  if (typeof e != "function")
    throw new TypeError("executor must be a function.");
  var t;
  this.promise = new Promise(function (n) {
    t = n
  }
  );
  var r = this;
  this.promise.then(function (o) {
    if (!!r._listeners) {
      var n, s = r._listeners.length;
      for (n = 0; n < s; n++)
        r._listeners[n](o);
      r._listeners = null
    }
  }),
    this.promise.then = function (o) {
      var n, s = new Promise(function (i) {
        r.subscribe(i),
          n = i
      }
      ).then(o);
      return s.cancel = function () {
        r.unsubscribe(n)
      }
        ,
        s
    }
    ,
    e(function (n) {
      r.reason || (r.reason = new Os(n),
        t(r.reason))
    })
}
Qt.prototype.throwIfRequested = function () {
  if (this.reason)
    throw this.reason
}
  ;
Qt.prototype.subscribe = function (t) {
  if (this.reason) {
    t(this.reason);
    return
  }
  this._listeners ? this._listeners.push(t) : this._listeners = [t]
}
  ;
Qt.prototype.unsubscribe = function (t) {
  if (!!this._listeners) {
    var r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1)
  }
}
  ;
Qt.source = function () {
  var t, r = new Qt(function (n) {
    t = n
  }
  );
  return {
    token: r,
    cancel: t
  }
}
  ;
var Us = Qt
  , js = function (t) {
    return function (o) {
      return t.apply(null, o)
    }
  }
  , Hs = ut
  , qs = function (t) {
    return Hs.isObject(t) && t.isAxiosError === !0
  }
  , $n = ut
  , zs = qn
  , ve = Ms
  , Vs = er
  , Ws = fn;
function or(e) {
  var t = new ve(e)
    , r = zs(ve.prototype.request, t);
  return $n.extend(r, ve.prototype, t),
    $n.extend(r, t),
    r.create = function (n) {
      return or(Vs(e, n))
    }
    ,
    r
}
var ht = or(Ws);
ht.Axios = ve;
ht.CanceledError = xe;
ht.CancelToken = Us;
ht.isCancel = tr;
ht.VERSION = nr.version;
ht.toFormData = Xn;
ht.AxiosError = re;
ht.Cancel = ht.CanceledError;
ht.all = function (t) {
  return Promise.all(t)
}
  ;
ht.spread = js;
ht.isAxiosError = qs;
an.exports = ht;
an.exports.default = ht;
var Ke = an.exports;
function Ut(e) {
  Ke.get("https://drpf-gift.proxima.nie.easebar.com/", {
    params: {
      type: "derivate_front",
      game_type_id: 5,
      time: new Date().getTime() / 1e3,
      user_account: Nt.state.roleInfo && Nt.state.roleInfo.urs || "",
      user_aid: Nt.state.roleInfo && Nt.state.roleInfo.aid || "",
      current_url: location.href,
      current_page: "yys-20220618",
      prev_url: Nt.state.prev_url,
      prev_page: Nt.state.prev_page,
      event: e,
      attribute: ""
    }
  })
}
var se = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r
}
  ;
const Gs = {
  key: 0,
  class: "toast"
}
  , Js = ft({
    props: {
      msg: String,
      isShow: Boolean
    },
    setup(e) {
      const t = e;
      return K(!0),
        (r, o) => t.isShow ? (T(),
          I("div", Gs, q(t.msg), 1)) : z("", !0)
    }
  });
var Ys = se(Js, [["__scopeId", "data-v-418b5227"]]);
function Qs(e, t = 300) {
  let r = null;
  return function (o) {
    r && clearTimeout(r),
      r = setTimeout(() => {
        e(o)
      }
        , t)
  }
}
function Xs(e, t = 300) {
  let r = !0;
  return function (o) {
    if (!r)
      return !1;
    r = !1,
      setTimeout(() => {
        e(o),
          r = !0
      }
        , t)
  }
}
let qe = null;
function at(e, t = 1.5) {
  if (!qe) {
    const r = document.createElement("div")
      , o = Ct(Ys, At({
        msg: e,
        isShow: !0
      }));
    qe = o,
      br(o, r),
      document.body.appendChild(r),
      setTimeout(() => {
        document.body.removeChild(r),
          qe = null
      }
        , t * 1e3)
  }
}
class Ks {
  constructor() {
    de(this, "defaultConfig", {
      timeout: 5e3,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    de(this, "axiosInstance", Ke.create(this.defaultConfig));
    de(this, "loginUrl", "")
  }
  init(t) {
    const r = s => Promise.reject(s)
      , o = s => (s.data.code != 0 && at(s.data.msg),
        s)
      , n = Me(Me({}, this.defaultConfig), t);
    this.axiosInstance = Ke.create(n),
      this.axiosInstance.interceptors.response.use(o, r)
  }
  setLoginUrl(t) {
    this.loginUrl = t
  }
  async base(t) {
    var o;
    const { data: r } = await ((o = this.axiosInstance) == null ? void 0 : o.request(t));
    return r
  }
  async get(t, r) {
    return await this.base({
      url: t,
      params: r,
      method: "GET"
    })
  }
  async post(t, r, o) {
    return await this.base({
      url: t,
      data: r,
      params: o,
      method: "POST"
    })
  }
  async del(t, r, o) {
    return await this.base({
      url: t,
      data: r,
      params: o,
      method: "DELETE"
    })
  }
  async put(t, r, o) {
    return await this.base({
      url: t,
      data: r,
      params: o,
      method: "PUT"
    })
  }
}
const Rt = Nt.state;
var Zs = {
  homeApi() {
    return Et.get("/home")
  },
  userInfoApi() {
    return Et.get(`/user/info/${Rt.roleId}?record=false`)
  },
  questionListApi() {
    return Et.get(`/question/list/${Rt.roleId}`)
  },
  answerApi(e, t) {
    const r = new URLSearchParams;
    return r.append("questionId", e),
      r.append("answerChoice", t),
      Et.post(`/question/answer/${Rt.roleId}`, r)
  },
  exchangeApi(e) {
    const t = new URLSearchParams;
    return t.append("awardId", e),
      Et.post(`/award/exchange/${Rt.roleId}`, t)
  },
  attendance() {
    return Et.post(`/attendance/${Rt.roleId}`)
  },
  afterShare() {
    return Et.post(`/share/money/add/${Rt.roleId}`)
  },
  getMoneyRecord(e) {
    return Et.get(`/user/money/record/list/${Rt.roleId}/${e}`)
  },
  getAwardRecord(e) {
    return Et.get(`/user/award/record/list/${Rt.roleId}/${e}`)
  },
  changeTimeApi(e = "2022-06-09") {
    return Et.get(`/test/setTime/${Rt.roleId}/?date=${e}`)
  },
  uploadApi(e, t) {
    let r = new FormData;
    return r.append("mime", t),
      r.append("file", e),
      Et.post("/upload", r)
  }
};
const Et = new Ks
  , to = "production";
let ye = "/";
switch (to) {
  case "production":
    ye = "/yys20220601/";
    break;
  case "debug":
    ye = "/api/";
    break;
  case "development":
    ye = "/";
    break
}
Et.init({
  baseURL: ye
});
var xt = {
  allApi: Zs
};
function ke() {
  xt.allApi.userInfoApi().then(e => {
    e.code == 0 && e.result.resultCode == 0 && e.result.userInfo.money && Nt.commit("updateMoney", e.result.userInfo.money)
  }
  )
}
const eo = {
  class: "allprize-box"
}
  , no = f("div", {
    class: "tit"
  }, null, -1)
  , ro = f("p", {
    class: "tip"
  }, "\u5956\u54C1\u5E93\u5B58\u6709\u9650\uFF0C\u5148\u5230\u5148\u5F97\u54E6~", -1)
  , so = {
    class: "listbox"
  }
  , oo = {
    class: "longbox"
  }
  , io = ["onClick"]
  , ao = {
    class: "img"
  }
  , uo = ["src"]
  , lo = {
    class: "name"
  }
  , co = {
    class: "price"
  }
  , ho = f("i", {
    class: "icon"
  }, null, -1)
  , fo = {
    class: "num"
  }
  , po = {
    key: 0,
    class: "exchange-view pop-content"
  }
  , go = {
    class: "exchange-box"
  }
  , mo = f("div", {
    class: "tit"
  }, null, -1)
  , vo = {
    class: "tip"
  }
  , yo = {
    class: "img"
  }
  , wo = ["src"]
  , Eo = {
    key: 0,
    class: "exchangeResult-view pop-content"
  }
  , Co = {
    key: 0,
    class: "exchangeResult-box"
  }
  , _o = f("div", {
    class: "tit1"
  }, null, -1)
  , Fo = f("p", {
    class: "tip"
  }, "\u606D\u559C\u5927\u4EBA\u83B7\u5F97\u4EE5\u4E0B\u5956\u52B1\uFF01", -1)
  , Bo = {
    class: "img"
  }
  , xo = ["src"]
  , bo = f("p", {
    class: "tip2"
  }, "\uFF08\u5956\u54C1\u5DF2\u7ECF\u53D1\u653E\u5230\u60A8\u7684\u8D26\u6237\uFF09", -1)
  , Ao = {
    key: 1,
    class: "exchangeResult-box"
  }
  , ko = f("div", {
    class: "tit2"
  }, null, -1)
  , To = f("div", {
    class: "tip tip1"
  }, [f("div", {
    class: "paperman"
  }), f("div", {
    class: "dialog"
  })], -1)
  , So = {
    key: 2,
    class: "exchangeResult-box"
  }
  , Io = f("div", {
    class: "tit2"
  }, null, -1)
  , Do = f("div", {
    class: "tip tip2"
  }, [f("div", {
    class: "paperman"
  }), f("div", {
    class: "dialog"
  })], -1)
  , Ro = ft({
    props: ["awardList"],
    setup(e, { expose: t }) {
      const r = e
        , o = kt()
        , n = At({
          showType: 0,
          awardId: 0,
          exchangeRes: -1,
          isStart: !1,
          isEnd: !1
        })
        , s = Ht(() => JSON.parse(JSON.stringify(r.awardList)).sort((_, y) => _.awardId - y.awardId))
        , i = Ht(() => s.value.find(_ => _.awardId == n.awardId))
        , u = v => {
          n.showType = v,
            g()
        }
        , a = () => {
          n.showType == 1 ? n.showType = 0 : (n.showType == 2 || n.showType == 3) && (n.showType = 1),
            g()
        }
        , c = v => {
          n.awardId = v.awardId,
            v.exchangeable ? (n.exchangeRes = -1,
              n.showType = 2) : (n.exchangeRes = 1,
                n.showType = 3),
            g()
        }
        , d = () => {
          $("html").animate({
            scrollTop: $(".part-2 .tit2").offset().top
          }, 300)
        }
        , g = () => {
          n.showType <= 0 ? $("html, body").removeClass("ov") : $("html, body").addClass("ov")
        }
        , F = async () => {
          if (!n.isStart) {
            at("\u5C06\u4E8E6\u67088\u65E5\u6B63\u5F0F\u5F00\u542F\uFF5E");
            return
          }
          if (n.isEnd) {
            at("\u6D3B\u52A8\u5DF2\u7ECF\u8FC7\u671F\uFF5E");
            return
          }
          let v = i.value.awardId;
          const _ = await xt.allApi.exchangeApi(v);
          if (_.code == 0) {
            let y = _.result;
            y.resultCode == 0 ? (n.exchangeRes = 0,
              n.showType = 3,
              ke()) : y.resultCode == 101 ? (n.exchangeRes = 1,
                n.showType = 3) : y.resultCode == 102 ? (n.exchangeRes = 2,
                  n.showType = 3) : (y.resultCode == 600 || y.resultCode == 700,
                    at(y.resultMsg)),
              g()
          }
        }
        , E = () => {
          let v = i.value.type
            , _ = window.location.origin == "https://t.act.gift.163.com" || window.location.origin == "http://localhost:3000";
          v == 2 || v == 3 ? window.location.href = `${_ ? "http://gmall.dev.webapp.163.com:8002" : "https://yys-mg.gift.163.com"}/cgi/coupon?coupon_status=canuse` : v == 1 && (window.location.href = `${_ ? "http://gmall.dev.webapp.163.com:8002" : "https://yys-mg.gift.163.com"}/cgi/score_shop`)
        }
        , h = () => {
          n.showType = 1,
            g()
        }
        , p = () => {
          n.showType = 1,
            g()
        }
        , m = () => {
          n.showType = 0,
            d(),
            g()
        }
        ;
      return ee(() => {
        const v = new Date("2022/06/08 00:00:00").getTime()
          , _ = new Date("2022/06/29 00:00:00").getTime()
          , y = new Date(o.state.sysTime).getTime();
        y > v && (n.isStart = !0),
          y > _ && (n.isEnd = !0)
      }
      ),
        t({
          showPop: u,
          showExchangePage: c
        }),
        (v, _) => (T(),
          I(nt, null, [f("div", {
            class: rt(["pop pop-allprize", {
              on: x(n).showType == 1
            }])
          }, [f("div", {
            class: "mask",
            onClick: a
          }), f("div", {
            class: "allprize-view pop-content",
            onClick: _[0] || (_[0] = ge(() => { }
              , ["stop"]))
          }, [f("div", eo, [no, ro, f("div", so, [f("div", oo, [(T(!0),
            I(nt, null, Lt(x(s), (y, B) => (T(),
              I("a", {
                href: "javascript:;",
                class: rt([{
                  gary: !y.exchangeable
                }, "jp-item"]),
                key: B,
                onClick: S => c(y)
              }, [f("div", ao, [f("img", {
                src: y.imgUrl
              }, null, 8, uo)]), f("p", lo, q(y.name), 1), f("p", co, [ho, f("span", fo, q(y.price), 1)])], 10, io))), 128))])])]), f("a", {
                href: "javascript:;",
                class: "close-pop close-allprize",
                title: "close",
                onClick: a
              })])], 2), f("div", {
                class: rt(["pop pop-exchange", {
                  on: x(n).showType == 2
                }])
              }, [f("div", {
                class: "mask",
                onClick: a
              }), x(i) ? (T(),
                I("div", po, [f("div", go, [mo, f("p", vo, "\u662F\u5426\u4F7F\u7528" + q(x(i).price) + "\u5B9D\u888B\u6765\u5151\u6362\u6B64\u5956\u54C1\u5417\uFF1F", 1), f("div", yo, [f("img", {
                  src: x(i).imgUrl
                }, null, 8, wo)]), f("div", {
                  class: "btns"
                }, [f("a", {
                  href: "javascript:;",
                  class: "btn think-btn",
                  onClick: a
                }, "\u6211\u518D\u60F3\u60F3"), f("a", {
                  href: "javascript:;",
                  class: "btn confirm-btn",
                  onClick: F
                }, "\u5151\u6362")])]), f("a", {
                  href: "javascript:;",
                  class: "close-pop close-exchange",
                  title: "close",
                  onClick: a
                })])) : z("", !0)], 2), f("div", {
                  class: rt(["pop pop-exchangeResult", {
                    on: x(n).showType == 3
                  }])
                }, [f("div", {
                  class: "mask",
                  onClick: a
                }), x(i) ? (T(),
                  I("div", Eo, [x(n).exchangeRes == 0 ? (T(),
                    I("div", Co, [_o, Fo, f("div", Bo, [f("img", {
                      src: x(i).imgUrl
                    }, null, 8, xo)]), bo, f("div", {
                      class: "btns"
                    }, [f("a", {
                      href: "javascript:;",
                      class: "btn lookPrize-btn",
                      onClick: E
                    }, "\u67E5\u770B\u5956\u54C1"), f("a", {
                      href: "javascript:;",
                      class: "btn happy-btn",
                      onClick: h
                    }, "\u5F00\u5FC3\u6536\u4E0B")])])) : z("", !0), x(n).exchangeRes == 1 ? (T(),
                      I("div", Ao, [ko, To, f("div", {
                        class: "btns"
                      }, [f("a", {
                        href: "javascript:;",
                        class: "btn hd-btn",
                        onClick: p
                      }, "\u597D\u7684")])])) : z("", !0), x(n).exchangeRes == 2 ? (T(),
                        I("div", So, [Io, Do, f("div", {
                          class: "btns"
                        }, [f("a", {
                          href: "javascript:;",
                          class: "btn qzbd-btn",
                          onClick: m
                        }, "\u53BB\u8D5A\u5B9D\u888B")])])) : z("", !0), f("a", {
                          href: "javascript:;",
                          class: "close-pop close-exchangeResult",
                          title: "close",
                          onClick: a
                        })])) : z("", !0)], 2)], 64))
    }
  });
var Lo = "/html/yys20220601/assets/icon-bag.73157eeb.png";
const Te = e => (_e("data-v-361ca488"),
  e = e(),
  Fe(),
  e)
  , $o = {
    key: 0,
    class: "modal"
  }
  , Po = {
    class: "modal-record"
  }
  , No = {
    class: "user"
  }
  , Mo = {
    class: "user-info"
  }
  , Oo = {
    class: "text"
  }
  , Uo = {
    class: "text"
  }
  , jo = {
    class: "bag"
  }
  , Ho = Te(() => f("i", {
    class: "icon-bag"
  }, null, -1))
  , qo = {
    class: "bag-number"
  }
  , zo = {
    class: "inner"
  }
  , Vo = {
    class: "tab"
  }
  , Wo = {
    key: 0
  }
  , Go = {
    class: "product-item"
  }
  , Jo = {
    class: "product-text"
  }
  , Yo = {
    class: "product-name"
  }
  , Qo = {
    class: "product-time"
  }
  , Xo = {
    class: "product-desc"
  }
  , Ko = {
    class: "product-img"
  }
  , Zo = ["src"]
  , ti = {
    key: 1
  }
  , ei = {
    class: "product-item"
  }
  , ni = {
    class: "product-text"
  }
  , ri = {
    class: "product-name"
  }
  , si = {
    class: "product-time"
  }
  , oi = {
    class: "product-desc"
  }
  , ii = {
    class: "product-img"
  }
  , ai = {
    class: "money"
  }
  , ui = Te(() => f("img", {
    src: Lo
  }, null, -1))
  , li = {
    key: 2,
    class: "no-more"
  }
  , ci = Te(() => f("i", {
    class: "bottom-paperman"
  }, null, -1))
  , di = {
    key: 1,
    class: "modal"
  }
  , hi = {
    class: "modal-rule"
  }
  , fi = Te(() => f("div", {
    class: "rule-text"
  }, "\u6B64\u5904\u4E3A\u5927\u4EBA\u5F53\u524D\u767B\u5F55\u89D2\u8272\u6240\u62E5\u6709\u7684\u5B9D\u888B\u6570\u91CF\uFF0C\u5982\u60A8\u6709\u5176\u4ED6\u89D2\u8272\u53C2\u4E0E\u672C\u6D3B\u52A8\uFF0C\u53EF\u5728\u4E0B\u65B9\u660E\u7EC6\u67E5\u770B\u76F8\u5173\u8BB0\u5F55\uFF1B\u6D3B\u52A8\u7ED3\u675F\u540E\u5982\u5927\u4EBA\u672A\u80FD\u53CA\u65F6\u5151\u6362\uFF0C\u5C06\u81EA\u52A8\u6309\u716710\u5B9D\u888B=1\u79EF\u5206\u7684\u6BD4\u4F8B\uFF0C\u81EA\u52A8\u8F6C\u5316\u6210\u5546\u57CE\u79EF\u5206\uFF0C\u53D1\u653E\u5230\u60A8\u6700\u540E\u4E00\u5929\u53C2\u4E0E\u6D3B\u52A8\u7684\u89D2\u8272\uFF0C\u8BF7\u5927\u5BB6\u53CA\u65F6\u5151\u6362\uFF5E", -1))
  , pi = ft({
    setup(e, { expose: t }) {
      const r = kt()
        , o = K(!1)
        , n = K(!1)
        , s = At({
          awardList: [],
          awardListHasNext: !1,
          moneyList: [],
          moneyListHasNext: !1,
          currentTab: 0,
          money: 0
        });
      function i() {
        o.value = !1,
          $("html, body").removeClass("ov")
      }
      function u(h = 0) {
        xt.allApi.getAwardRecord(h).then(p => {
          p.code == 0 && (h === 0 ? s.awardList = p.result.list : s.awardList = s.awardList.concat(p.result.list),
            s.awardListHasNext = p.result.hasNext)
        }
        )
      }
      function a(h = 0) {
        xt.allApi.getMoneyRecord(h).then(p => {
          p.code == 0 && (h === 0 ? s.moneyList = p.result.list : s.moneyList = s.moneyList.concat(p.result.list),
            s.moneyListHasNext = p.result.hasNext)
        }
        )
      }
      const c = Qs(function (h) {
        h.target.scrollHeight - h.target.scrollTop - 5 < h.target.clientHeight && (s.currentTab === 0 && s.awardListHasNext ? u(s.awardList.length) : s.currentTab === 1 && s.awardListHasNext && a(s.moneyList.length))
      });
      function d(h) {
        h == 1 && !s.moneyList.length && a(),
          s.currentTab = h
      }
      function g() {
        n.value = !0
      }
      function F() {
        xt.allApi.userInfoApi().then(h => {
          h.code == 0 && h.result.resultCode == 0 && h.result.userInfo.money && (s.money = h.result.userInfo.money)
        }
        )
      }
      async function E() {
        F(),
          u(),
          o.value = !0
      }
      return t({
        showPop: E
      }),
        (h, p) => {
          var m, v, _, y;
          return T(),
            I(nt, null, [o.value ? (T(),
              I("div", $o, [f("div", {
                class: "modal-mask",
                onClick: i
              }), f("div", Po, [f("div", No, [f("div", {
                class: "user-avatar",
                style: jn({
                  backgroundImage: `url(${(m = x(r).state.roleInfo) == null ? void 0 : m.iconUrl})`
                })
              }, null, 4), f("div", Mo, [f("div", Oo, q((v = x(r).state.roleInfo) == null ? void 0 : v.nickname), 1), f("div", Uo, [ne(q((_ = x(r).state.roleInfo) == null ? void 0 : _.serverName), 1), f("i", {
                class: "what",
                onClick: g
              })])])]), f("div", jo, [Ho, f("p", qo, q(x(s).money || ((y = x(r).state.roleInfo) == null ? void 0 : y.money)), 1)]), f("div", zo, [f("div", Vo, [f("div", {
                class: rt(["tab-item", {
                  active: x(s).currentTab == 0
                }]),
                onClick: p[0] || (p[0] = B => d(0))
              }, "\u6211\u7684\u5956\u54C1", 2), f("div", {
                class: rt(["tab-item", {
                  active: x(s).currentTab == 1
                }]),
                onClick: p[1] || (p[1] = B => d(1))
              }, "\u6211\u7684\u5B9D\u888B", 2)]), f("div", {
                class: "product-list",
                onScroll: p[2] || (p[2] = (...B) => x(c) && x(c)(...B))
              }, [x(s).currentTab == 0 ? (T(),
                I("div", Wo, [(T(!0),
                  I(nt, null, Lt(x(s).awardList, B => (T(),
                    I("div", Go, [f("div", Jo, [f("span", Yo, q(B.awardName), 1), f("span", Qo, q(B.recordTime), 1), f("div", Xo, q(B.nickname) + "\u4F7F\u7528\u4E86" + q(B.useMoney) + "\u5B9D\u888B\uFF0C\u5151\u6362\u4E86" + q(B.awardName), 1)]), f("div", Ko, [f("img", {
                      src: B.iconUrl
                    }, null, 8, Zo)])]))), 256))])) : (T(),
                      I("div", ti, [(T(!0),
                        I(nt, null, Lt(x(s).moneyList, B => (T(),
                          I("div", ei, [f("div", ni, [f("span", ri, q(B.taskDesc), 1), f("span", si, q(B.recordTime), 1), f("div", oi, q(B.nickname) + "-" + q(B.taskDesc), 1)]), f("div", ii, [f("i", ai, q(B.money), 1), ui])]))), 256))])), x(s).currentTab == 0 && !x(s).awardListHasNext || x(s).currentTab == 1 && !x(s).moneyListHasNext ? (T(),
                            I("p", li, "\u6CA1\u6709\u66F4\u591A\u8BB0\u5F55\u4E86")) : z("", !0)], 32)]), f("i", {
                              class: "modal-close",
                              onClick: i
                            }), ci])])) : z("", !0), n.value ? (T(),
                              I("div", di, [f("div", {
                                class: "modal-mask",
                                onClick: p[3] || (p[3] = B => n.value = !1)
                              }), f("div", hi, [fi, f("i", {
                                class: "modal-close",
                                onClick: p[4] || (p[4] = B => n.value = !1)
                              })])])) : z("", !0)], 64)
        }
    }
  });
var gi = se(pi, [["__scopeId", "data-v-361ca488"]]);
const mi = function () {
  function e(y) {
    var B = y.target ? y.target : null
      , S = y.product ? y.product : null
      , R = y.param ? y.param : null;
    F = y.link ? y.link : null,
      h = y.bg ? y.bg : null,
      E = y.fake ? y.fake : null,
      p = y.type ? y.type : 1,
      m = y.auto ? y.auto : !1,
      v = y.wait ? y.wait : 1e3,
      _ = y.fail ? y.fail : null;
    var M = [];
    if (typeof R == "object" && R) {
      for (var P in R)
        M.push(P + "=" + R[P]);
      M = M.join("&")
    } else
      M = R;
    return B && S ? void t(B, S, function (k) {
      a(B, S, M, k)
    }) : !1
  }
  function t(y, B, S) {
    $.ajax({
      url: "https://websource.nie.netease.com/start/get/start_info",
      type: "GET",
      dataType: "jsonp",
      data: {
        product: B.toUpperCase()
      },
      success: function (R) {
        R.success ? S(R.result) : r(y)
      },
      error: function () {
        r(y)
      }
    })
  }
  function r(y) {
    $(y).click(function () {
      alert("\u670D\u52A1\u5668\u7E41\u5FD9(\u6216\u8005\u6E38\u620F\u6CA1\u6709\u5F00\u901A\u670D\u52A1)\uFF0C\u8BF7\u7A0D\u5019\u91CD\u8BD5")
    })
  }
  function o(y, B, S) {
    if (d || S) {
      if (F) {
        var R = "https://game.163.com";
        return B.start_link && (R = B.start_link.split("/").splice(0, 3).join("/")),
          R + "/open/" + y + "/jump.html?jumpurl=" + encodeURIComponent(F)
      }
      return B.start_link || "https://game.163.com/open/" + y + "/"
    }
    return E || B.android_link
  }
  function n() {
    var y = h || "https://nie.res.netease.com/comm/js/nie/util/gamestart/img/bg_769653d.jpg"
      , B = '<div style="position: fixed;top: 0;left: 0;z-index: 1000;background:#f8f8f8;height:100%;width:100%;"><img src="' + y + '" width="100%" height="auto" /></div>';
    $("body").append(B)
  }
  function s() {
    var y = "https://nie.res.netease.com/comm/js/nie/util/gamestart/img/loading_50c5e3e.gif"
      , B = '<div id="js_startgame_loading" style="position:fixed;width:200px;height:160px;border-radius:20px;left:50%;top:50%;margin-left:-100px;margin-top:-80px;background:rgba(0,0,0,0.8);text-align:center;">						<label style="color:white;font-size:22px;">\u542F\u52A8ing...</label><br />						<img src="' + y + '" />					</div>';
    $("body").append(B)
  }
  function i() {
    $("#js_startgame_loading").remove()
  }
  function u(y) {
    return window.addEventListener("blur", y),
    {
      remove: function () {
        window.removeEventListener("blur", y)
      }
    }
  }
  function a(y, B, S, R) {
    var M = o(B, R);
    if (m && setTimeout(function () {
      $(y).click()
    }, 200),
      d)
      return S && (M += M.indexOf("?") > -1 ? "&" + S : S.indexOf("?") > -1 ? S : "?" + S),
        $(y).on("click", function () {
          window.MShare && MShare.report({
            monitor: "press_start_action",
            desc: "\u4E00\u952E\u542F\u52A8-\u6309\u94AE\u70B9\u51FB",
            game_product: B
          }),
            setTimeout(function () {
              window.location.href = M
            }, 200)
        });
    if (M = M.split(","),
      S)
      for (var P = 0; P < M.length; P++)
        M[P] += M[P].indexOf("?") > -1 ? "&" + S : S.indexOf("?") > -1 ? S : "?" + S;
    $(y).click(function () {
      function k() {
        clearTimeout(U),
          G.remove(),
          i()
      }
      if (window.MShare && MShare.report({
        monitor: "press_start_action",
        desc: "\u4E00\u952E\u542F\u52A8-\u6309\u94AE\u70B9\u51FB",
        game_product: B
      }),
        c)
        return n();
      if (v > 1e3 && s(),
        M.length <= 1 && p == 2) {
        var U = setTimeout(function () {
          i(),
            G.remove(),
            _ ? _() : window.location.href = o(B, R, !0)
        }, v)
          , G = u(k);
        return window.location = M[0],
          !1
      }
      for (var Q = 0, V = 0; V < M.length; V++) {
        $("body").append("<iframe style='display:none;' src='" + M[V] + "'></iframe>");
        var st = new Date;
        setTimeout(function () {
          i(),
            new Date - st - v < 200 && (Q++,
              Q >= M.length && (_ ? _() : window.location.href = o(B, R, !0)))
        }, v)
      }
    })
  }
  var c = /micromessenger|qq\/|weibo|godlike|yixin/i.test(navigator.userAgent.toLowerCase())
    , d = /iphone os/i.test(navigator.userAgent.toLowerCase()) || /ipad|macintosh/i.test(navigator.userAgent.toLowerCase())
    , g = /android/i.test(navigator.userAgent.toLowerCase())
    , F = ""
    , E = ""
    , h = ""
    , p = 1
    , m = !1
    , v = 1e3
    , _ = null;
  return d || g || (d = !0),
  {
    init: e
  }
}();
let Pn = window.location.origin == "https://t.act.gift.163.com" || window.location.origin == "http://localhost:3000"
  , Nn = "";
function qt(e) {
  Nn = `teamid=0&type=12&extra=&redirecturl=${Pn ? "http://gmall.dev.webapp.163.com:8002" : "https://yys-mg.gift.163.com"}${e ? "" : "/cgi/oauth?" + encodeURIComponent("url=" + (Pn ? "https://t.act.gift.163.com/html/yys20220601/index.html" : "https://act.gift.163.com/html/yys20220601/index.html"))}`;
  let r = document.createElement("div");
  r.setAttribute("id", "game-start");
  let o = {
    target: "#game-start",
    product: "yys",
    type: 2,
    link: "https://game.163.com/open/yys/go.html",
    param: Nn
  };
  document.body.appendChild(r),
    Ye(() => {
      mi.init(o),
        setTimeout(function () {
          r.click(),
            Ye(() => document.body.removeChild(r))
        }, 500)
    }
    )
}
const vi = {
  class: "part-1"
}
  , yi = {
    class: "top"
  }
  , wi = {
    class: "number"
  }
  , Ei = f("i", {
    class: "icon"
  }, null, -1)
  , Ci = {
    key: 0
  }
  , _i = ne(" \u6211\u7684\u5B9D\u888B:")
  , Fi = {
    class: "color"
  }
  , Bi = {
    class: "prize-list"
  }
  , xi = {
    class: "swiper-container swiperbox"
  }
  , bi = {
    class: "swiper-wrapper"
  }
  , Ai = {
    class: "itm"
  }
  , ki = ["onClick"]
  , Ti = ["src"]
  , Si = {
    class: "info"
  }
  , Ii = {
    class: "name"
  }
  , Di = {
    class: "needNum"
  }
  , Ri = {
    class: "color"
  }
  , Li = ne("\u5B9D\u888B ")
  , $i = {
    key: 0,
    class: "swiper-button-prev btn-prev"
  }
  , Pi = {
    key: 1,
    class: "swiper-button-next btn-next"
  }
  , Ni = ft({
    props: ["awardList"],
    setup(e) {
      const t = kt()
        , r = K(null);
      At({
        showType: 0,
        aIndex: -1,
        isStart: !1,
        isEnd: !1
      });
      const o = K(null);
      function n() {
        o.value.showPop(),
          $("html, body").addClass("ov")
      }
      const s = () => {
        if (!t.state.roleInfo) {
          at("\u8BF7\u5728\u5468\u8FB9\u5C4B\u5185\u53C2\u4E0E\uFF5E"),
            setTimeout(() => {
              qt()
            }
              , 1500);
          return
        }
        $("html, body").addClass("ov"),
          r.value.showPop(1)
      }
        ;
      function i() {
        qt()
      }
      const u = a => {
        r.value.showExchangePage(a)
      }
        ;
      return ee(() => {
        new Swiper(".swiperbox", {
          slidesPerView: 4,
          nextButton: ".swiper-button-next",
          prevButton: ".swiper-button-prev",
          autoplay: 3e3,
          observer: !0,
          observeParents: !0,
          autoplayDisableOnInteraction: !1
        })
      }
      ),
        (a, c) => (T(),
          I(nt, null, [f("section", vi, [f("div", yi, [f("div", wi, [Ei, x(t).state.roleInfo ? (T(),
            I("p", Ci, [_i, f("span", Fi, q(x(t).state.roleInfo.money ? x(t).state.roleInfo.money : 0), 1)])) : z("", !0)]), x(t).state.roleInfo ? (T(),
              I("a", {
                key: 0,
                href: "javascript:;",
                class: "prize-record",
                onClick: n
              }, " \u5956\u54C1\u8BB0\u5F55 ")) : (T(),
                I("a", {
                  key: 1,
                  href: "javascript:;",
                  class: "prize-record",
                  onClick: i
                }, " \u8FDB\u5165\u6E38\u620F\u5185\u5468\u8FB9\u5C4B\u53C2\u4E0E "))]), f("div", Bi, [f("div", xi, [f("div", bi, [(T(!0),
                  I(nt, null, Lt(e.awardList, (d, g) => (T(),
                    I("div", {
                      class: rt(["swiper-slide swp-item", {
                        gary: !d.exchangeable
                      }]),
                      key: g
                    }, [f("div", Ai, [f("div", {
                      class: "img",
                      onClick: F => u(d)
                    }, [f("img", {
                      src: d.imgUrl
                    }, null, 8, Ti)], 8, ki), f("div", Si, [f("p", Ii, q(d.name), 1), f("p", Di, [f("span", Ri, q(d.price), 1), Li])])])], 2))), 128))])]), e.awardList.length ? (T(),
                      I("div", $i)) : z("", !0), e.awardList.length ? (T(),
                        I("div", Pi)) : z("", !0)]), f("a", {
                          href: "javascript:;",
                          class: "allPrize_btn",
                          onClick: s
                        }, "\u6240\u6709\u5956\u54C1")]), e.awardList.length ? (T(),
                          sn(Ro, {
                            key: 0,
                            ref_key: "popExchangeRef",
                            ref: r,
                            awardList: e.awardList
                          }, null, 8, ["awardList"])) : z("", !0), Ct(gi, {
                            ref_key: "popRecordRef",
                            ref: o
                          }, null, 512)], 64))
    }
  });
var ir = "/html/yys20220601/assets/default-img.854c72b0.jpg"
  , Mi = "/html/yys20220601/assets/act2-shadow.07172988.png"
  , Oi = "/html/yys20220601/assets/act2-ring.20eaf6cc.png"
  , Ui = "/html/yys20220601/assets/act2-paperman.f2e243a2.png"
  , ji = "/html/yys20220601/assets/act3-shadow.4da7125c.png"
  , Hi = "/html/yys20220601/assets/act3-ring.2c7af912.png";
const qi = {
  key: 0,
  class: "con"
}
  , zi = {
    class: "img"
  }
  , Vi = ["src"]
  , Wi = {
    class: "problem-txt"
  }
  , Gi = {
    class: "answer-list"
  }
  , Ji = ["onClick"]
  , Yi = {
    class: "letter"
  }
  , Qi = {
    class: "txt"
  }
  , Xi = f("i", {
    class: "icon"
  }, null, -1)
  , Ze = ft({
    props: ["isHome", "cur"],
    emits: ["sendData", "chooseItem"],
    setup(e, { expose: t, emit: r }) {
      const o = e
        , n = kt()
        , s = At({
          list: [],
          i: 0,
          checkId: "",
          qid: "",
          totayAnswer: !1
        })
        , i = Ht(() => {
          let E = [];
          for (const h in n.state.quesList[u.value])
            h.indexOf("choice") > -1 && E.push({
              choiceId: h.slice(-1).toLowerCase(),
              description: n.state.quesList[u.value][h]
            });
          return E
        }
        )
        , u = Ht(() => o.isHome ? n.state.curQuesIndex : o.cur || s.i)
        , a = (E, h) => {
          s.totayAnswer || n.state.quesList[s.i].answerChoice || (s.checkId = E.choiceId,
            s.qid = h,
            r("chooseItem", E.choiceId))
        }
        ;
      async function c() {
        if (!s.checkId) {
          at("\u8BF7\u5927\u4EBA\u5148\u9009\u62E9\u4E00\u4E2A\u9009\u9879\u54E6");
          return
        }
        const E = await xt.allApi.answerApi(s.qid * 1, s.checkId + "");
        if (E.code == 0) {
          let h = E.result;
          h.resultCode == 0 || h.resultCode == 201 ? (F(),
            h.resultCode == 0 ? (Ut("\u9634\u9633\u5E086\u6708\u5FEB\u95EA\u731C\u8C1C-\u53C2\u4E0E\u731C\u8C1C\u6B63\u786E"),
              ke()) : Ut("\u9634\u9633\u5E086\u6708\u5FEB\u95EA\u731C\u8C1C-\u53C2\u4E0E\u731C\u8C1C\u9519\u8BEF")) : (h.resultCode == 600 || h.resultCode == 700,
                at(h.resultMsg))
        }
        s.checkId = "",
          s.qid = ""
      }
      function d(E) {
        let h = n.state.quesList.length;
        if (E) {
          let p = s.i;
          s.i >= h - 1 && (p = -1),
            p++,
            s.i = p
        } else {
          let p = s.i;
          s.i <= 0 && (p = h),
            p--,
            s.i = p
        }
      }
      const g = E => {
        s.i = n.state.curQuesIndex;
        let h = E[s.i];
        s.totayAnswer = !!h.answerChoice,
          r("sendData")
      }
        , F = async () => {
          let h = (await xt.allApi.questionListApi()).result;
          n.commit("saveQuestion", h.questionList),
            g(h.questionList)
        }
        ;
      return ee(() => {
        if (n.state.quesList && n.state.quesList.length) {
          g(n.state.quesList);
          return
        }
        F()
      }
      ),
        t({
          submitAnswer: c,
          changeQus: d,
          state: s
        }),
        (E, h) => x(n).state.quesList.length ? (T(),
          I("div", qi, [f("div", zi, [f("img", {
            src: x(n).state.quesList[x(u)].imgUrl
          }, null, 8, Vi)]), f("div", Wi, q(x(n).state.quesList[x(u)].description), 1), f("div", Gi, [(T(!0),
            I(nt, null, Lt(x(i), (p, m) => (T(),
              I("a", {
                href: "javascript:;",
                class: rt(["answer-txt", {
                  ok: p.choiceId == x(n).state.quesList[x(u)].answerChoice && p.choiceId == x(n).state.quesList[x(u)].correctChoice,
                  err: p.choiceId == x(n).state.quesList[x(u)].answerChoice && p.choiceId != x(n).state.quesList[x(u)].correctChoice,
                  check: x(s).checkId == p.choiceId
                }]),
                key: m,
                onClick: v => a(p, x(n).state.quesList[x(u)].questionId)
              }, [f("span", Yi, q(p.choiceId), 1), f("span", Qi, q(p.description), 1), Xi], 10, Ji))), 128))])])) : z("", !0)
    }
  });
var oe = {}
  , Ki = function () {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
  }
  , ar = {}
  , vt = {};
let gn;
const Zi = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
vt.getSymbolSize = function (t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17
}
  ;
vt.getSymbolTotalCodewords = function (t) {
  return Zi[t]
}
  ;
vt.getBCHDigit = function (e) {
  let t = 0;
  for (; e !== 0;)
    t++,
      e >>>= 1;
  return t
}
  ;
vt.setToSJISFunction = function (t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  gn = t
}
  ;
vt.isKanjiModeEnabled = function () {
  return typeof gn != "undefined"
}
  ;
vt.toSJIS = function (t) {
  return gn(t)
}
  ;
var Se = {};
(function (e) {
  e.L = {
    bit: 1
  },
    e.M = {
      bit: 0
    },
    e.Q = {
      bit: 3
    },
    e.H = {
      bit: 2
    };
  function t(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + r)
    }
  }
  e.isValid = function (o) {
    return o && typeof o.bit != "undefined" && o.bit >= 0 && o.bit < 4
  }
    ,
    e.from = function (o, n) {
      if (e.isValid(o))
        return o;
      try {
        return t(o)
      } catch {
        return n
      }
    }
}
)(Se);
function ur() {
  this.buffer = [],
    this.length = 0
}
ur.prototype = {
  get: function (e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1
  },
  put: function (e, t) {
    for (let r = 0; r < t; r++)
      this.putBit((e >>> t - r - 1 & 1) === 1)
  },
  getLengthInBits: function () {
    return this.length
  },
  putBit: function (e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0),
      e && (this.buffer[t] |= 128 >>> this.length % 8),
      this.length++
  }
};
var ta = ur;
function ce(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e,
    this.data = new Uint8Array(e * e),
    this.reservedBit = new Uint8Array(e * e)
}
ce.prototype.set = function (e, t, r, o) {
  const n = e * this.size + t;
  this.data[n] = r,
    o && (this.reservedBit[n] = !0)
}
  ;
ce.prototype.get = function (e, t) {
  return this.data[e * this.size + t]
}
  ;
ce.prototype.xor = function (e, t, r) {
  this.data[e * this.size + t] ^= r
}
  ;
ce.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t]
}
  ;
var ea = ce
  , lr = {};
(function (e) {
  const t = vt.getSymbolSize;
  e.getRowColCoords = function (o) {
    if (o === 1)
      return [];
    const n = Math.floor(o / 7) + 2
      , s = t(o)
      , i = s === 145 ? 26 : Math.ceil((s - 13) / (2 * n - 2)) * 2
      , u = [s - 7];
    for (let a = 1; a < n - 1; a++)
      u[a] = u[a - 1] - i;
    return u.push(6),
      u.reverse()
  }
    ,
    e.getPositions = function (o) {
      const n = []
        , s = e.getRowColCoords(o)
        , i = s.length;
      for (let u = 0; u < i; u++)
        for (let a = 0; a < i; a++)
          u === 0 && a === 0 || u === 0 && a === i - 1 || u === i - 1 && a === 0 || n.push([s[u], s[a]]);
      return n
    }
}
)(lr);
var cr = {};
const na = vt.getSymbolSize
  , Mn = 7;
cr.getPositions = function (t) {
  const r = na(t);
  return [[0, 0], [r - Mn, 0], [0, r - Mn]]
}
  ;
var dr = {};
(function (e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function (n) {
    return n != null && n !== "" && !isNaN(n) && n >= 0 && n <= 7
  }
    ,
    e.from = function (n) {
      return e.isValid(n) ? parseInt(n, 10) : void 0
    }
    ,
    e.getPenaltyN1 = function (n) {
      const s = n.size;
      let i = 0
        , u = 0
        , a = 0
        , c = null
        , d = null;
      for (let g = 0; g < s; g++) {
        u = a = 0,
          c = d = null;
        for (let F = 0; F < s; F++) {
          let E = n.get(g, F);
          E === c ? u++ : (u >= 5 && (i += t.N1 + (u - 5)),
            c = E,
            u = 1),
            E = n.get(F, g),
            E === d ? a++ : (a >= 5 && (i += t.N1 + (a - 5)),
              d = E,
              a = 1)
        }
        u >= 5 && (i += t.N1 + (u - 5)),
          a >= 5 && (i += t.N1 + (a - 5))
      }
      return i
    }
    ,
    e.getPenaltyN2 = function (n) {
      const s = n.size;
      let i = 0;
      for (let u = 0; u < s - 1; u++)
        for (let a = 0; a < s - 1; a++) {
          const c = n.get(u, a) + n.get(u, a + 1) + n.get(u + 1, a) + n.get(u + 1, a + 1);
          (c === 4 || c === 0) && i++
        }
      return i * t.N2
    }
    ,
    e.getPenaltyN3 = function (n) {
      const s = n.size;
      let i = 0
        , u = 0
        , a = 0;
      for (let c = 0; c < s; c++) {
        u = a = 0;
        for (let d = 0; d < s; d++)
          u = u << 1 & 2047 | n.get(c, d),
            d >= 10 && (u === 1488 || u === 93) && i++,
            a = a << 1 & 2047 | n.get(d, c),
            d >= 10 && (a === 1488 || a === 93) && i++
      }
      return i * t.N3
    }
    ,
    e.getPenaltyN4 = function (n) {
      let s = 0;
      const i = n.data.length;
      for (let a = 0; a < i; a++)
        s += n.data[a];
      return Math.abs(Math.ceil(s * 100 / i / 5) - 10) * t.N4
    }
    ;
  function r(o, n, s) {
    switch (o) {
      case e.Patterns.PATTERN000:
        return (n + s) % 2 === 0;
      case e.Patterns.PATTERN001:
        return n % 2 === 0;
      case e.Patterns.PATTERN010:
        return s % 3 === 0;
      case e.Patterns.PATTERN011:
        return (n + s) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(n / 2) + Math.floor(s / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return n * s % 2 + n * s % 3 === 0;
      case e.Patterns.PATTERN110:
        return (n * s % 2 + n * s % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (n * s % 3 + (n + s) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + o)
    }
  }
  e.applyMask = function (n, s) {
    const i = s.size;
    for (let u = 0; u < i; u++)
      for (let a = 0; a < i; a++)
        s.isReserved(a, u) || s.xor(a, u, r(n, a, u))
  }
    ,
    e.getBestMask = function (n, s) {
      const i = Object.keys(e.Patterns).length;
      let u = 0
        , a = 1 / 0;
      for (let c = 0; c < i; c++) {
        s(c),
          e.applyMask(c, n);
        const d = e.getPenaltyN1(n) + e.getPenaltyN2(n) + e.getPenaltyN3(n) + e.getPenaltyN4(n);
        e.applyMask(c, n),
          d < a && (a = d,
            u = c)
      }
      return u
    }
}
)(dr);
var Ie = {};
const Ot = Se
  , fe = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81]
  , pe = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
Ie.getBlocksCount = function (t, r) {
  switch (r) {
    case Ot.L:
      return fe[(t - 1) * 4 + 0];
    case Ot.M:
      return fe[(t - 1) * 4 + 1];
    case Ot.Q:
      return fe[(t - 1) * 4 + 2];
    case Ot.H:
      return fe[(t - 1) * 4 + 3];
    default:
      return
  }
}
  ;
Ie.getTotalCodewordsCount = function (t, r) {
  switch (r) {
    case Ot.L:
      return pe[(t - 1) * 4 + 0];
    case Ot.M:
      return pe[(t - 1) * 4 + 1];
    case Ot.Q:
      return pe[(t - 1) * 4 + 2];
    case Ot.H:
      return pe[(t - 1) * 4 + 3];
    default:
      return
  }
}
  ;
var hr = {}
  , De = {};
const ue = new Uint8Array(512)
  , Ee = new Uint8Array(256);
(function () {
  let t = 1;
  for (let r = 0; r < 255; r++)
    ue[r] = t,
      Ee[t] = r,
      t <<= 1,
      t & 256 && (t ^= 285);
  for (let r = 255; r < 512; r++)
    ue[r] = ue[r - 255]
}
)();
De.log = function (t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return Ee[t]
}
  ;
De.exp = function (t) {
  return ue[t]
}
  ;
De.mul = function (t, r) {
  return t === 0 || r === 0 ? 0 : ue[Ee[t] + Ee[r]]
}
  ;
(function (e) {
  const t = De;
  e.mul = function (o, n) {
    const s = new Uint8Array(o.length + n.length - 1);
    for (let i = 0; i < o.length; i++)
      for (let u = 0; u < n.length; u++)
        s[i + u] ^= t.mul(o[i], n[u]);
    return s
  }
    ,
    e.mod = function (o, n) {
      let s = new Uint8Array(o);
      for (; s.length - n.length >= 0;) {
        const i = s[0];
        for (let a = 0; a < n.length; a++)
          s[a] ^= t.mul(n[a], i);
        let u = 0;
        for (; u < s.length && s[u] === 0;)
          u++;
        s = s.slice(u)
      }
      return s
    }
    ,
    e.generateECPolynomial = function (o) {
      let n = new Uint8Array([1]);
      for (let s = 0; s < o; s++)
        n = e.mul(n, new Uint8Array([1, t.exp(s)]));
      return n
    }
}
)(hr);
const fr = hr;
function mn(e) {
  this.genPoly = void 0,
    this.degree = e,
    this.degree && this.initialize(this.degree)
}
mn.prototype.initialize = function (t) {
  this.degree = t,
    this.genPoly = fr.generateECPolynomial(this.degree)
}
  ;
mn.prototype.encode = function (t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const r = new Uint8Array(t.length + this.degree);
  r.set(t);
  const o = fr.mod(r, this.genPoly)
    , n = this.degree - o.length;
  if (n > 0) {
    const s = new Uint8Array(this.degree);
    return s.set(o, n),
      s
  }
  return o
}
  ;
var ra = mn
  , pr = {}
  , jt = {}
  , vn = {};
vn.isValid = function (t) {
  return !isNaN(t) && t >= 1 && t <= 40
}
  ;
var Tt = {};
const gr = "[0-9]+"
  , sa = "[A-Z $%*+\\-./:]+";
let le = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
le = le.replace(/u/g, "\\u");
const oa = "(?:(?![A-Z0-9 $%*+\\-./:]|" + le + `)(?:.|[\r
]))+`;
Tt.KANJI = new RegExp(le, "g");
Tt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Tt.BYTE = new RegExp(oa, "g");
Tt.NUMERIC = new RegExp(gr, "g");
Tt.ALPHANUMERIC = new RegExp(sa, "g");
const ia = new RegExp("^" + le + "$")
  , aa = new RegExp("^" + gr + "$")
  , ua = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Tt.testKanji = function (t) {
  return ia.test(t)
}
  ;
Tt.testNumeric = function (t) {
  return aa.test(t)
}
  ;
Tt.testAlphanumeric = function (t) {
  return ua.test(t)
}
  ;
(function (e) {
  const t = vn
    , r = Tt;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  },
    e.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    },
    e.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    },
    e.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    },
    e.MIXED = {
      bit: -1
    },
    e.getCharCountIndicator = function (s, i) {
      if (!s.ccBits)
        throw new Error("Invalid mode: " + s);
      if (!t.isValid(i))
        throw new Error("Invalid version: " + i);
      return i >= 1 && i < 10 ? s.ccBits[0] : i < 27 ? s.ccBits[1] : s.ccBits[2]
    }
    ,
    e.getBestModeForData = function (s) {
      return r.testNumeric(s) ? e.NUMERIC : r.testAlphanumeric(s) ? e.ALPHANUMERIC : r.testKanji(s) ? e.KANJI : e.BYTE
    }
    ,
    e.toString = function (s) {
      if (s && s.id)
        return s.id;
      throw new Error("Invalid mode")
    }
    ,
    e.isValid = function (s) {
      return s && s.bit && s.ccBits
    }
    ;
  function o(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + n)
    }
  }
  e.from = function (s, i) {
    if (e.isValid(s))
      return s;
    try {
      return o(s)
    } catch {
      return i
    }
  }
}
)(jt);
(function (e) {
  const t = vt
    , r = Ie
    , o = Se
    , n = jt
    , s = vn
    , i = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0
    , u = t.getBCHDigit(i);
  function a(F, E, h) {
    for (let p = 1; p <= 40; p++)
      if (E <= e.getCapacity(p, h, F))
        return p
  }
  function c(F, E) {
    return n.getCharCountIndicator(F, E) + 4
  }
  function d(F, E) {
    let h = 0;
    return F.forEach(function (p) {
      h += c(p.mode, E) + p.getBitsLength()
    }),
      h
  }
  function g(F, E) {
    for (let h = 1; h <= 40; h++)
      if (d(F, h) <= e.getCapacity(h, E, n.MIXED))
        return h
  }
  e.from = function (E, h) {
    return s.isValid(E) ? parseInt(E, 10) : h
  }
    ,
    e.getCapacity = function (E, h, p) {
      if (!s.isValid(E))
        throw new Error("Invalid QR Code version");
      typeof p == "undefined" && (p = n.BYTE);
      const m = t.getSymbolTotalCodewords(E)
        , v = r.getTotalCodewordsCount(E, h)
        , _ = (m - v) * 8;
      if (p === n.MIXED)
        return _;
      const y = _ - c(p, E);
      switch (p) {
        case n.NUMERIC:
          return Math.floor(y / 10 * 3);
        case n.ALPHANUMERIC:
          return Math.floor(y / 11 * 2);
        case n.KANJI:
          return Math.floor(y / 13);
        case n.BYTE:
        default:
          return Math.floor(y / 8)
      }
    }
    ,
    e.getBestVersionForData = function (E, h) {
      let p;
      const m = o.from(h, o.M);
      if (Array.isArray(E)) {
        if (E.length > 1)
          return g(E, m);
        if (E.length === 0)
          return 1;
        p = E[0]
      } else
        p = E;
      return a(p.mode, p.getLength(), m)
    }
    ,
    e.getEncodedBits = function (E) {
      if (!s.isValid(E) || E < 7)
        throw new Error("Invalid QR Code version");
      let h = E << 12;
      for (; t.getBCHDigit(h) - u >= 0;)
        h ^= i << t.getBCHDigit(h) - u;
      return E << 12 | h
    }
}
)(pr);
var mr = {};
const tn = vt
  , vr = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0
  , la = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1
  , On = tn.getBCHDigit(vr);
mr.getEncodedBits = function (t, r) {
  const o = t.bit << 3 | r;
  let n = o << 10;
  for (; tn.getBCHDigit(n) - On >= 0;)
    n ^= vr << tn.getBCHDigit(n) - On;
  return (o << 10 | n) ^ la
}
  ;
var yr = {};
const ca = jt;
function Xt(e) {
  this.mode = ca.NUMERIC,
    this.data = e.toString()
}
Xt.getBitsLength = function (t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
}
  ;
Xt.prototype.getLength = function () {
  return this.data.length
}
  ;
Xt.prototype.getBitsLength = function () {
  return Xt.getBitsLength(this.data.length)
}
  ;
Xt.prototype.write = function (t) {
  let r, o, n;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    o = this.data.substr(r, 3),
      n = parseInt(o, 10),
      t.put(n, 10);
  const s = this.data.length - r;
  s > 0 && (o = this.data.substr(r),
    n = parseInt(o, 10),
    t.put(n, s * 3 + 1))
}
  ;
var da = Xt;
const ha = jt
  , ze = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
function Kt(e) {
  this.mode = ha.ALPHANUMERIC,
    this.data = e
}
Kt.getBitsLength = function (t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2)
}
  ;
Kt.prototype.getLength = function () {
  return this.data.length
}
  ;
Kt.prototype.getBitsLength = function () {
  return Kt.getBitsLength(this.data.length)
}
  ;
Kt.prototype.write = function (t) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let o = ze.indexOf(this.data[r]) * 45;
    o += ze.indexOf(this.data[r + 1]),
      t.put(o, 11)
  }
  this.data.length % 2 && t.put(ze.indexOf(this.data[r]), 6)
}
  ;
var fa = Kt
  , pa = function (t) {
    for (var r = [], o = t.length, n = 0; n < o; n++) {
      var s = t.charCodeAt(n);
      if (s >= 55296 && s <= 56319 && o > n + 1) {
        var i = t.charCodeAt(n + 1);
        i >= 56320 && i <= 57343 && (s = (s - 55296) * 1024 + i - 56320 + 65536,
          n += 1)
      }
      if (s < 128) {
        r.push(s);
        continue
      }
      if (s < 2048) {
        r.push(s >> 6 | 192),
          r.push(s & 63 | 128);
        continue
      }
      if (s < 55296 || s >= 57344 && s < 65536) {
        r.push(s >> 12 | 224),
          r.push(s >> 6 & 63 | 128),
          r.push(s & 63 | 128);
        continue
      }
      if (s >= 65536 && s <= 1114111) {
        r.push(s >> 18 | 240),
          r.push(s >> 12 & 63 | 128),
          r.push(s >> 6 & 63 | 128),
          r.push(s & 63 | 128);
        continue
      }
      r.push(239, 191, 189)
    }
    return new Uint8Array(r).buffer
  };
const ga = pa
  , ma = jt;
function Zt(e) {
  this.mode = ma.BYTE,
    this.data = new Uint8Array(ga(e))
}
Zt.getBitsLength = function (t) {
  return t * 8
}
  ;
Zt.prototype.getLength = function () {
  return this.data.length
}
  ;
Zt.prototype.getBitsLength = function () {
  return Zt.getBitsLength(this.data.length)
}
  ;
Zt.prototype.write = function (e) {
  for (let t = 0, r = this.data.length; t < r; t++)
    e.put(this.data[t], 8)
}
  ;
var va = Zt;
const ya = jt
  , wa = vt;
function te(e) {
  this.mode = ya.KANJI,
    this.data = e
}
te.getBitsLength = function (t) {
  return t * 13
}
  ;
te.prototype.getLength = function () {
  return this.data.length
}
  ;
te.prototype.getBitsLength = function () {
  return te.getBitsLength(this.data.length)
}
  ;
te.prototype.write = function (e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let r = wa.toSJIS(this.data[t]);
    if (r >= 33088 && r <= 40956)
      r -= 33088;
    else if (r >= 57408 && r <= 60351)
      r -= 49472;
    else
      throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
    r = (r >>> 8 & 255) * 192 + (r & 255),
      e.put(r, 13)
  }
}
  ;
var Ea = te
  , wr = {
    exports: {}
  };
(function (e) {
  var t = {
    single_source_shortest_paths: function (r, o, n) {
      var s = {}
        , i = {};
      i[o] = 0;
      var u = t.PriorityQueue.make();
      u.push(o, 0);
      for (var a, c, d, g, F, E, h, p, m; !u.empty();) {
        a = u.pop(),
          c = a.value,
          g = a.cost,
          F = r[c] || {};
        for (d in F)
          F.hasOwnProperty(d) && (E = F[d],
            h = g + E,
            p = i[d],
            m = typeof i[d] == "undefined",
            (m || p > h) && (i[d] = h,
              u.push(d, h),
              s[d] = c))
      }
      if (typeof n != "undefined" && typeof i[n] == "undefined") {
        var v = ["Could not find a path from ", o, " to ", n, "."].join("");
        throw new Error(v)
      }
      return s
    },
    extract_shortest_path_from_predecessor_list: function (r, o) {
      for (var n = [], s = o; s;)
        n.push(s),
          s = r[s];
      return n.reverse(),
        n
    },
    find_path: function (r, o, n) {
      var s = t.single_source_shortest_paths(r, o, n);
      return t.extract_shortest_path_from_predecessor_list(s, n)
    },
    PriorityQueue: {
      make: function (r) {
        var o = t.PriorityQueue, n = {}, s;
        r = r || {};
        for (s in o)
          o.hasOwnProperty(s) && (n[s] = o[s]);
        return n.queue = [],
          n.sorter = r.sorter || o.default_sorter,
          n
      },
      default_sorter: function (r, o) {
        return r.cost - o.cost
      },
      push: function (r, o) {
        var n = {
          value: r,
          cost: o
        };
        this.queue.push(n),
          this.queue.sort(this.sorter)
      },
      pop: function () {
        return this.queue.shift()
      },
      empty: function () {
        return this.queue.length === 0
      }
    }
  };
  e.exports = t
}
)(wr);
(function (e) {
  const t = jt
    , r = da
    , o = fa
    , n = va
    , s = Ea
    , i = Tt
    , u = vt
    , a = wr.exports;
  function c(v) {
    return unescape(encodeURIComponent(v)).length
  }
  function d(v, _, y) {
    const B = [];
    let S;
    for (; (S = v.exec(y)) !== null;)
      B.push({
        data: S[0],
        index: S.index,
        mode: _,
        length: S[0].length
      });
    return B
  }
  function g(v) {
    const _ = d(i.NUMERIC, t.NUMERIC, v)
      , y = d(i.ALPHANUMERIC, t.ALPHANUMERIC, v);
    let B, S;
    return u.isKanjiModeEnabled() ? (B = d(i.BYTE, t.BYTE, v),
      S = d(i.KANJI, t.KANJI, v)) : (B = d(i.BYTE_KANJI, t.BYTE, v),
        S = []),
      _.concat(y, B, S).sort(function (M, P) {
        return M.index - P.index
      }).map(function (M) {
        return {
          data: M.data,
          mode: M.mode,
          length: M.length
        }
      })
  }
  function F(v, _) {
    switch (_) {
      case t.NUMERIC:
        return r.getBitsLength(v);
      case t.ALPHANUMERIC:
        return o.getBitsLength(v);
      case t.KANJI:
        return s.getBitsLength(v);
      case t.BYTE:
        return n.getBitsLength(v)
    }
  }
  function E(v) {
    return v.reduce(function (_, y) {
      const B = _.length - 1 >= 0 ? _[_.length - 1] : null;
      return B && B.mode === y.mode ? (_[_.length - 1].data += y.data,
        _) : (_.push(y),
          _)
    }, [])
  }
  function h(v) {
    const _ = [];
    for (let y = 0; y < v.length; y++) {
      const B = v[y];
      switch (B.mode) {
        case t.NUMERIC:
          _.push([B, {
            data: B.data,
            mode: t.ALPHANUMERIC,
            length: B.length
          }, {
              data: B.data,
              mode: t.BYTE,
              length: B.length
            }]);
          break;
        case t.ALPHANUMERIC:
          _.push([B, {
            data: B.data,
            mode: t.BYTE,
            length: B.length
          }]);
          break;
        case t.KANJI:
          _.push([B, {
            data: B.data,
            mode: t.BYTE,
            length: c(B.data)
          }]);
          break;
        case t.BYTE:
          _.push([{
            data: B.data,
            mode: t.BYTE,
            length: c(B.data)
          }])
      }
    }
    return _
  }
  function p(v, _) {
    const y = {}
      , B = {
        start: {}
      };
    let S = ["start"];
    for (let R = 0; R < v.length; R++) {
      const M = v[R]
        , P = [];
      for (let k = 0; k < M.length; k++) {
        const U = M[k]
          , G = "" + R + k;
        P.push(G),
          y[G] = {
            node: U,
            lastCount: 0
          },
          B[G] = {};
        for (let Q = 0; Q < S.length; Q++) {
          const V = S[Q];
          y[V] && y[V].node.mode === U.mode ? (B[V][G] = F(y[V].lastCount + U.length, U.mode) - F(y[V].lastCount, U.mode),
            y[V].lastCount += U.length) : (y[V] && (y[V].lastCount = U.length),
              B[V][G] = F(U.length, U.mode) + 4 + t.getCharCountIndicator(U.mode, _))
        }
      }
      S = P
    }
    for (let R = 0; R < S.length; R++)
      B[S[R]].end = 0;
    return {
      map: B,
      table: y
    }
  }
  function m(v, _) {
    let y;
    const B = t.getBestModeForData(v);
    if (y = t.from(_, B),
      y !== t.BYTE && y.bit < B.bit)
      throw new Error('"' + v + '" cannot be encoded with mode ' + t.toString(y) + `.
 Suggested mode is: ` + t.toString(B));
    switch (y === t.KANJI && !u.isKanjiModeEnabled() && (y = t.BYTE),
    y) {
      case t.NUMERIC:
        return new r(v);
      case t.ALPHANUMERIC:
        return new o(v);
      case t.KANJI:
        return new s(v);
      case t.BYTE:
        return new n(v)
    }
  }
  e.fromArray = function (_) {
    return _.reduce(function (y, B) {
      return typeof B == "string" ? y.push(m(B, null)) : B.data && y.push(m(B.data, B.mode)),
        y
    }, [])
  }
    ,
    e.fromString = function (_, y) {
      const B = g(_, u.isKanjiModeEnabled())
        , S = h(B)
        , R = p(S, y)
        , M = a.find_path(R.map, "start", "end")
        , P = [];
      for (let k = 1; k < M.length - 1; k++)
        P.push(R.table[M[k]].node);
      return e.fromArray(E(P))
    }
    ,
    e.rawSplit = function (_) {
      return e.fromArray(g(_, u.isKanjiModeEnabled()))
    }
}
)(yr);
const Re = vt
  , Ve = Se
  , Ca = ta
  , _a = ea
  , Fa = lr
  , Ba = cr
  , en = dr
  , nn = Ie
  , xa = ra
  , Ce = pr
  , ba = mr
  , Aa = jt
  , We = yr;
function ka(e, t) {
  const r = e.size
    , o = Ba.getPositions(t);
  for (let n = 0; n < o.length; n++) {
    const s = o[n][0]
      , i = o[n][1];
    for (let u = -1; u <= 7; u++)
      if (!(s + u <= -1 || r <= s + u))
        for (let a = -1; a <= 7; a++)
          i + a <= -1 || r <= i + a || (u >= 0 && u <= 6 && (a === 0 || a === 6) || a >= 0 && a <= 6 && (u === 0 || u === 6) || u >= 2 && u <= 4 && a >= 2 && a <= 4 ? e.set(s + u, i + a, !0, !0) : e.set(s + u, i + a, !1, !0))
  }
}
function Ta(e) {
  const t = e.size;
  for (let r = 8; r < t - 8; r++) {
    const o = r % 2 === 0;
    e.set(r, 6, o, !0),
      e.set(6, r, o, !0)
  }
}
function Sa(e, t) {
  const r = Fa.getPositions(t);
  for (let o = 0; o < r.length; o++) {
    const n = r[o][0]
      , s = r[o][1];
    for (let i = -2; i <= 2; i++)
      for (let u = -2; u <= 2; u++)
        i === -2 || i === 2 || u === -2 || u === 2 || i === 0 && u === 0 ? e.set(n + i, s + u, !0, !0) : e.set(n + i, s + u, !1, !0)
  }
}
function Ia(e, t) {
  const r = e.size
    , o = Ce.getEncodedBits(t);
  let n, s, i;
  for (let u = 0; u < 18; u++)
    n = Math.floor(u / 3),
      s = u % 3 + r - 8 - 3,
      i = (o >> u & 1) === 1,
      e.set(n, s, i, !0),
      e.set(s, n, i, !0)
}
function Ge(e, t, r) {
  const o = e.size
    , n = ba.getEncodedBits(t, r);
  let s, i;
  for (s = 0; s < 15; s++)
    i = (n >> s & 1) === 1,
      s < 6 ? e.set(s, 8, i, !0) : s < 8 ? e.set(s + 1, 8, i, !0) : e.set(o - 15 + s, 8, i, !0),
      s < 8 ? e.set(8, o - s - 1, i, !0) : s < 9 ? e.set(8, 15 - s - 1 + 1, i, !0) : e.set(8, 15 - s - 1, i, !0);
  e.set(o - 8, 8, 1, !0)
}
function Da(e, t) {
  const r = e.size;
  let o = -1
    , n = r - 1
    , s = 7
    , i = 0;
  for (let u = r - 1; u > 0; u -= 2)
    for (u === 6 && u--; ;) {
      for (let a = 0; a < 2; a++)
        if (!e.isReserved(n, u - a)) {
          let c = !1;
          i < t.length && (c = (t[i] >>> s & 1) === 1),
            e.set(n, u - a, c),
            s--,
            s === -1 && (i++,
              s = 7)
        }
      if (n += o,
        n < 0 || r <= n) {
        n -= o,
          o = -o;
        break
      }
    }
}
function Ra(e, t, r) {
  const o = new Ca;
  r.forEach(function (a) {
    o.put(a.mode.bit, 4),
      o.put(a.getLength(), Aa.getCharCountIndicator(a.mode, e)),
      a.write(o)
  });
  const n = Re.getSymbolTotalCodewords(e)
    , s = nn.getTotalCodewordsCount(e, t)
    , i = (n - s) * 8;
  for (o.getLengthInBits() + 4 <= i && o.put(0, 4); o.getLengthInBits() % 8 !== 0;)
    o.putBit(0);
  const u = (i - o.getLengthInBits()) / 8;
  for (let a = 0; a < u; a++)
    o.put(a % 2 ? 17 : 236, 8);
  return La(o, e, t)
}
function La(e, t, r) {
  const o = Re.getSymbolTotalCodewords(t)
    , n = nn.getTotalCodewordsCount(t, r)
    , s = o - n
    , i = nn.getBlocksCount(t, r)
    , u = o % i
    , a = i - u
    , c = Math.floor(o / i)
    , d = Math.floor(s / i)
    , g = d + 1
    , F = c - d
    , E = new xa(F);
  let h = 0;
  const p = new Array(i)
    , m = new Array(i);
  let v = 0;
  const _ = new Uint8Array(e.buffer);
  for (let M = 0; M < i; M++) {
    const P = M < a ? d : g;
    p[M] = _.slice(h, h + P),
      m[M] = E.encode(p[M]),
      h += P,
      v = Math.max(v, P)
  }
  const y = new Uint8Array(o);
  let B = 0, S, R;
  for (S = 0; S < v; S++)
    for (R = 0; R < i; R++)
      S < p[R].length && (y[B++] = p[R][S]);
  for (S = 0; S < F; S++)
    for (R = 0; R < i; R++)
      y[B++] = m[R][S];
  return y
}
function $a(e, t, r, o) {
  let n;
  if (Array.isArray(e))
    n = We.fromArray(e);
  else if (typeof e == "string") {
    let c = t;
    if (!c) {
      const d = We.rawSplit(e);
      c = Ce.getBestVersionForData(d, r)
    }
    n = We.fromString(e, c || 40)
  } else
    throw new Error("Invalid data");
  const s = Ce.getBestVersionForData(n, r);
  if (!s)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = s;
  else if (t < s)
    throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + s + `.
`);
  const i = Ra(t, r, n)
    , u = Re.getSymbolSize(t)
    , a = new _a(u);
  return ka(a, t),
    Ta(a),
    Sa(a, t),
    Ge(a, r, 0),
    t >= 7 && Ia(a, t),
    Da(a, i),
    isNaN(o) && (o = en.getBestMask(a, Ge.bind(null, a, r))),
    en.applyMask(o, a),
    Ge(a, r, o),
  {
    modules: a,
    version: t,
    errorCorrectionLevel: r,
    maskPattern: o,
    segments: n
  }
}
ar.create = function (t, r) {
  if (typeof t == "undefined" || t === "")
    throw new Error("No input text");
  let o = Ve.M, n, s;
  return typeof r != "undefined" && (o = Ve.from(r.errorCorrectionLevel, Ve.M),
    n = Ce.from(r.version),
    s = en.from(r.maskPattern),
    r.toSJISFunc && Re.setToSJISFunction(r.toSJISFunc)),
    $a(t, n, o, s)
}
  ;
var Er = {}
  , yn = {};
(function (e) {
  function t(r) {
    if (typeof r == "number" && (r = r.toString()),
      typeof r != "string")
      throw new Error("Color should be defined as hex string");
    let o = r.slice().replace("#", "").split("");
    if (o.length < 3 || o.length === 5 || o.length > 8)
      throw new Error("Invalid hex color: " + r);
    (o.length === 3 || o.length === 4) && (o = Array.prototype.concat.apply([], o.map(function (s) {
      return [s, s]
    }))),
      o.length === 6 && o.push("F", "F");
    const n = parseInt(o.join(""), 16);
    return {
      r: n >> 24 & 255,
      g: n >> 16 & 255,
      b: n >> 8 & 255,
      a: n & 255,
      hex: "#" + o.slice(0, 6).join("")
    }
  }
  e.getOptions = function (o) {
    o || (o = {}),
      o.color || (o.color = {});
    const n = typeof o.margin == "undefined" || o.margin === null || o.margin < 0 ? 4 : o.margin
      , s = o.width && o.width >= 21 ? o.width : void 0
      , i = o.scale || 4;
    return {
      width: s,
      scale: s ? 4 : i,
      margin: n,
      color: {
        dark: t(o.color.dark || "#000000ff"),
        light: t(o.color.light || "#ffffffff")
      },
      type: o.type,
      rendererOpts: o.rendererOpts || {}
    }
  }
    ,
    e.getScale = function (o, n) {
      return n.width && n.width >= o + n.margin * 2 ? n.width / (o + n.margin * 2) : n.scale
    }
    ,
    e.getImageWidth = function (o, n) {
      const s = e.getScale(o, n);
      return Math.floor((o + n.margin * 2) * s)
    }
    ,
    e.qrToImageData = function (o, n, s) {
      const i = n.modules.size
        , u = n.modules.data
        , a = e.getScale(i, s)
        , c = Math.floor((i + s.margin * 2) * a)
        , d = s.margin * a
        , g = [s.color.light, s.color.dark];
      for (let F = 0; F < c; F++)
        for (let E = 0; E < c; E++) {
          let h = (F * c + E) * 4
            , p = s.color.light;
          if (F >= d && E >= d && F < c - d && E < c - d) {
            const m = Math.floor((F - d) / a)
              , v = Math.floor((E - d) / a);
            p = g[u[m * i + v] ? 1 : 0]
          }
          o[h++] = p.r,
            o[h++] = p.g,
            o[h++] = p.b,
            o[h] = p.a
        }
    }
}
)(yn);
(function (e) {
  const t = yn;
  function r(n, s, i) {
    n.clearRect(0, 0, s.width, s.height),
      s.style || (s.style = {}),
      s.height = i,
      s.width = i,
      s.style.height = i + "px",
      s.style.width = i + "px"
  }
  function o() {
    try {
      return document.createElement("canvas")
    } catch {
      throw new Error("You need to specify a canvas element")
    }
  }
  e.render = function (s, i, u) {
    let a = u
      , c = i;
    typeof a == "undefined" && (!i || !i.getContext) && (a = i,
      i = void 0),
      i || (c = o()),
      a = t.getOptions(a);
    const d = t.getImageWidth(s.modules.size, a)
      , g = c.getContext("2d")
      , F = g.createImageData(d, d);
    return t.qrToImageData(F.data, s, a),
      r(g, c, d),
      g.putImageData(F, 0, 0),
      c
  }
    ,
    e.renderToDataURL = function (s, i, u) {
      let a = u;
      typeof a == "undefined" && (!i || !i.getContext) && (a = i,
        i = void 0),
        a || (a = {});
      const c = e.render(s, i, a)
        , d = a.type || "image/png"
        , g = a.rendererOpts || {};
      return c.toDataURL(d, g.quality)
    }
}
)(Er);
var Cr = {};
const Pa = yn;
function Un(e, t) {
  const r = e.a / 255
    , o = t + '="' + e.hex + '"';
  return r < 1 ? o + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : o
}
function Je(e, t, r) {
  let o = e + t;
  return typeof r != "undefined" && (o += " " + r),
    o
}
function Na(e, t, r) {
  let o = ""
    , n = 0
    , s = !1
    , i = 0;
  for (let u = 0; u < e.length; u++) {
    const a = Math.floor(u % t)
      , c = Math.floor(u / t);
    !a && !s && (s = !0),
      e[u] ? (i++,
        u > 0 && a > 0 && e[u - 1] || (o += s ? Je("M", a + r, .5 + c + r) : Je("m", n, 0),
          n = 0,
          s = !1),
        a + 1 < t && e[u + 1] || (o += Je("h", i),
          i = 0)) : n++
  }
  return o
}
Cr.render = function (t, r, o) {
  const n = Pa.getOptions(r)
    , s = t.modules.size
    , i = t.modules.data
    , u = s + n.margin * 2
    , a = n.color.light.a ? "<path " + Un(n.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : ""
    , c = "<path " + Un(n.color.dark, "stroke") + ' d="' + Na(i, s, n.margin) + '"/>'
    , d = 'viewBox="0 0 ' + u + " " + u + '"'
    , g = n.width ? 'width="' + n.width + '" height="' + n.width + '" ' : ""
    , F = '<svg xmlns="http://www.w3.org/2000/svg" ' + g + d + ' shape-rendering="crispEdges">' + a + c + `</svg>
`;
  return typeof o == "function" && o(null, F),
    F
}
  ;
const Ma = Ki
  , rn = ar
  , _r = Er
  , Oa = Cr;
function wn(e, t, r, o, n) {
  const s = [].slice.call(arguments, 1)
    , i = s.length
    , u = typeof s[i - 1] == "function";
  if (!u && !Ma())
    throw new Error("Callback required as last argument");
  if (u) {
    if (i < 2)
      throw new Error("Too few arguments provided");
    i === 2 ? (n = r,
      r = t,
      t = o = void 0) : i === 3 && (t.getContext && typeof n == "undefined" ? (n = o,
        o = void 0) : (n = o,
          o = r,
          r = t,
          t = void 0))
  } else {
    if (i < 1)
      throw new Error("Too few arguments provided");
    return i === 1 ? (r = t,
      t = o = void 0) : i === 2 && !t.getContext && (o = r,
        r = t,
        t = void 0),
      new Promise(function (a, c) {
        try {
          const d = rn.create(r, o);
          a(e(d, t, o))
        } catch (d) {
          c(d)
        }
      }
      )
  }
  try {
    const a = rn.create(r, o);
    n(null, e(a, t, o))
  } catch (a) {
    n(a)
  }
}
oe.create = rn.create;
oe.toCanvas = wn.bind(null, _r.render);
oe.toDataURL = wn.bind(null, _r.renderToDataURL);
oe.toString = wn.bind(null, function (e, t, r) {
  return Oa.render(e, r)
});
(function (e) {
  if (typeof exports == "object" && typeof module != "undefined")
    module.exports = e();
  else if (typeof define == "function" && define.amd)
    define([], e);
  else {
    var t;
    typeof window != "undefined" ? t = window : typeof global != "undefined" ? t = global : typeof self != "undefined" && (t = self),
      t.html2canvas = e()
  }
}
)(function () {
  return function e(t, r, o) {
    function n(u, a) {
      if (!r[u]) {
        if (!t[u]) {
          var c = typeof require == "function" && require;
          if (!a && c)
            return c(u, !0);
          if (s)
            return s(u, !0);
          var d = new Error("Cannot find module '" + u + "'");
          throw d.code = "MODULE_NOT_FOUND",
          d
        }
        var g = r[u] = {
          exports: {}
        };
        t[u][0].call(g.exports, function (F) {
          var E = t[u][1][F];
          return n(E || F)
        }, g, g.exports, e, t, r, o)
      }
      return r[u].exports
    }
    for (var s = typeof require == "function" && require, i = 0; i < o.length; i++)
      n(o[i]);
    return n
  }({
    1: [function (e, t, r) {
      (function (o) {
        (function (n) {
          var s = typeof r == "object" && r
            , i = typeof t == "object" && t && t.exports == s && t
            , u = typeof o == "object" && o;
          (u.global === u || u.window === u) && (n = u);
          var a, c = 2147483647, d = 36, g = 1, F = 26, E = 38, h = 700, p = 72, m = 128, v = "-", _ = /^xn--/, y = /[^ -~]/, B = /\x2E|\u3002|\uFF0E|\uFF61/g, S = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
          }, R = d - g, M = Math.floor, P = String.fromCharCode, k;
          function U(O) {
            throw RangeError(S[O])
          }
          function G(O, j) {
            for (var W = O.length; W--;)
              O[W] = j(O[W]);
            return O
          }
          function Q(O, j) {
            return G(O.split(B), j).join(".")
          }
          function V(O) {
            for (var j = [], W = 0, X = O.length, Y, it; W < X;)
              Y = O.charCodeAt(W++),
                Y >= 55296 && Y <= 56319 && W < X ? (it = O.charCodeAt(W++),
                  (it & 64512) == 56320 ? j.push(((Y & 1023) << 10) + (it & 1023) + 65536) : (j.push(Y),
                    W--)) : j.push(Y);
            return j
          }
          function st(O) {
            return G(O, function (j) {
              var W = "";
              return j > 65535 && (j -= 65536,
                W += P(j >>> 10 & 1023 | 55296),
                j = 56320 | j & 1023),
                W += P(j),
                W
            }).join("")
          }
          function ct(O) {
            return O - 48 < 10 ? O - 22 : O - 65 < 26 ? O - 65 : O - 97 < 26 ? O - 97 : d
          }
          function tt(O, j) {
            return O + 22 + 75 * (O < 26) - ((j != 0) << 5)
          }
          function $t(O, j, W) {
            var X = 0;
            for (O = W ? M(O / h) : O >> 1,
              O += M(O / j); O > R * F >> 1; X += d)
              O = M(O / R);
            return M(X + (R + 1) * O / (O + E))
          }
          function Pt(O) {
            var j = [], W = O.length, X, Y = 0, it = m, et = p, lt, pt, wt, Ft, Z, dt, gt, bt, St;
            for (lt = O.lastIndexOf(v),
              lt < 0 && (lt = 0),
              pt = 0; pt < lt; ++pt)
              O.charCodeAt(pt) >= 128 && U("not-basic"),
                j.push(O.charCodeAt(pt));
            for (wt = lt > 0 ? lt + 1 : 0; wt < W;) {
              for (Ft = Y,
                Z = 1,
                dt = d; wt >= W && U("invalid-input"),
                gt = ct(O.charCodeAt(wt++)),
                (gt >= d || gt > M((c - Y) / Z)) && U("overflow"),
                Y += gt * Z,
                bt = dt <= et ? g : dt >= et + F ? F : dt - et,
                !(gt < bt); dt += d)
                St = d - bt,
                  Z > M(c / St) && U("overflow"),
                  Z *= St;
              X = j.length + 1,
                et = $t(Y - Ft, X, Ft == 0),
                M(Y / X) > c - it && U("overflow"),
                it += M(Y / X),
                Y %= X,
                j.splice(Y++, 0, it)
            }
            return st(j)
          }
          function _t(O) {
            var j, W, X, Y, it, et, lt, pt, wt, Ft, Z, dt = [], gt, bt, St, l;
            for (O = V(O),
              gt = O.length,
              j = m,
              W = 0,
              it = p,
              et = 0; et < gt; ++et)
              Z = O[et],
                Z < 128 && dt.push(P(Z));
            for (X = Y = dt.length,
              Y && dt.push(v); X < gt;) {
              for (lt = c,
                et = 0; et < gt; ++et)
                Z = O[et],
                  Z >= j && Z < lt && (lt = Z);
              for (bt = X + 1,
                lt - j > M((c - W) / bt) && U("overflow"),
                W += (lt - j) * bt,
                j = lt,
                et = 0; et < gt; ++et)
                if (Z = O[et],
                  Z < j && ++W > c && U("overflow"),
                  Z == j) {
                  for (pt = W,
                    wt = d; Ft = wt <= it ? g : wt >= it + F ? F : wt - it,
                    !(pt < Ft); wt += d)
                    l = pt - Ft,
                      St = d - Ft,
                      dt.push(P(tt(Ft + l % St, 0))),
                      pt = M(l / St);
                  dt.push(P(tt(pt, 0))),
                    it = $t(W, bt, X == Y),
                    W = 0,
                    ++X
                }
              ++W,
                ++j
            }
            return dt.join("")
          }
          function ie(O) {
            return Q(O, function (j) {
              return _.test(j) ? Pt(j.slice(4).toLowerCase()) : j
            })
          }
          function yt(O) {
            return Q(O, function (j) {
              return y.test(j) ? "xn--" + _t(j) : j
            })
          }
          if (a = {
            version: "1.2.4",
            ucs2: {
              decode: V,
              encode: st
            },
            decode: Pt,
            encode: _t,
            toASCII: yt,
            toUnicode: ie
          },
            s && !s.nodeType)
            if (i)
              i.exports = a;
            else
              for (k in a)
                a.hasOwnProperty(k) && (s[k] = a[k]);
          else
            n.punycode = a
        }
        )(this)
      }
      ).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
    }
      , {}],
    2: [function (e, t, r) {
      var o = e("./log");
      function n(a, c, d) {
        a.defaultView && (c !== a.defaultView.pageXOffset || d !== a.defaultView.pageYOffset) && a.defaultView.scrollTo(c, d)
      }
      function s(a, c) {
        try {
          c && (c.width = a.width,
            c.height = a.height,
            c.getContext("2d").putImageData(a.getContext("2d").getImageData(0, 0, a.width, a.height), 0, 0))
        } catch (d) {
          o("Unable to copy canvas content from", a, d)
        }
      }
      function i(a, c) {
        for (var d = a.nodeType === 3 ? document.createTextNode(a.nodeValue) : a.cloneNode(!1), g = a.firstChild; g;)
          (c === !0 || g.nodeType !== 1 || g.nodeName !== "SCRIPT") && d.appendChild(i(g, c)),
            g = g.nextSibling;
        return a.nodeType === 1 && (d._scrollTop = a.scrollTop,
          d._scrollLeft = a.scrollLeft,
          a.nodeName === "CANVAS" ? s(a, d) : (a.nodeName === "TEXTAREA" || a.nodeName === "SELECT") && (d.value = a.value)),
          d
      }
      function u(a) {
        if (a.nodeType === 1) {
          a.scrollTop = a._scrollTop,
            a.scrollLeft = a._scrollLeft;
          for (var c = a.firstChild; c;)
            u(c),
              c = c.nextSibling
        }
      }
      t.exports = function (a, c, d, g, F, E, h) {
        var p = i(a.documentElement, F.javascriptEnabled)
          , m = c.createElement("iframe");
        return m.className = "html2canvas-container",
          m.style.visibility = "hidden",
          m.style.position = "fixed",
          m.style.left = "-10000px",
          m.style.top = "0px",
          m.style.border = "0",
          m.width = d,
          m.height = g,
          m.scrolling = "no",
          c.body.appendChild(m),
          new Promise(function (v) {
            var _ = m.contentWindow.document;
            m.contentWindow.onload = m.onload = function () {
              var y = setInterval(function () {
                _.body.childNodes.length > 0 && (u(_.documentElement),
                  clearInterval(y),
                  F.type === "view" && (m.contentWindow.scrollTo(E, h),
                    /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (m.contentWindow.scrollY !== h || m.contentWindow.scrollX !== E) && (_.documentElement.style.top = -h + "px",
                      _.documentElement.style.left = -E + "px",
                      _.documentElement.style.position = "absolute")),
                  v(m))
              }, 50)
            }
              ,
              _.open(),
              _.write("<!DOCTYPE html><html></html>"),
              n(a, E, h),
              _.replaceChild(_.adoptNode(p), _.documentElement),
              _.close()
          }
          )
      }
    }
      , {
      "./log": 13
    }],
    3: [function (e, t, r) {
      function o(c) {
        this.r = 0,
          this.g = 0,
          this.b = 0,
          this.a = null,
          this.fromArray(c) || this.namedColor(c) || this.rgb(c) || this.rgba(c) || this.hex6(c) || this.hex3(c)
      }
      o.prototype.darken = function (c) {
        var d = 1 - c;
        return new o([Math.round(this.r * d), Math.round(this.g * d), Math.round(this.b * d), this.a])
      }
        ,
        o.prototype.isTransparent = function () {
          return this.a === 0
        }
        ,
        o.prototype.isBlack = function () {
          return this.r === 0 && this.g === 0 && this.b === 0
        }
        ,
        o.prototype.fromArray = function (c) {
          return Array.isArray(c) && (this.r = Math.min(c[0], 255),
            this.g = Math.min(c[1], 255),
            this.b = Math.min(c[2], 255),
            c.length > 3 && (this.a = c[3])),
            Array.isArray(c)
        }
        ;
      var n = /^#([a-f0-9]{3})$/i;
      o.prototype.hex3 = function (c) {
        var d = null;
        return (d = c.match(n)) !== null && (this.r = parseInt(d[1][0] + d[1][0], 16),
          this.g = parseInt(d[1][1] + d[1][1], 16),
          this.b = parseInt(d[1][2] + d[1][2], 16)),
          d !== null
      }
        ;
      var s = /^#([a-f0-9]{6})$/i;
      o.prototype.hex6 = function (c) {
        var d = null;
        return (d = c.match(s)) !== null && (this.r = parseInt(d[1].substring(0, 2), 16),
          this.g = parseInt(d[1].substring(2, 4), 16),
          this.b = parseInt(d[1].substring(4, 6), 16)),
          d !== null
      }
        ;
      var i = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
      o.prototype.rgb = function (c) {
        var d = null;
        return (d = c.match(i)) !== null && (this.r = Number(d[1]),
          this.g = Number(d[2]),
          this.b = Number(d[3])),
          d !== null
      }
        ;
      var u = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;
      o.prototype.rgba = function (c) {
        var d = null;
        return (d = c.match(u)) !== null && (this.r = Number(d[1]),
          this.g = Number(d[2]),
          this.b = Number(d[3]),
          this.a = Number(d[4])),
          d !== null
      }
        ,
        o.prototype.toString = function () {
          return this.a !== null && this.a !== 1 ? "rgba(" + [this.r, this.g, this.b, this.a].join(",") + ")" : "rgb(" + [this.r, this.g, this.b].join(",") + ")"
        }
        ,
        o.prototype.namedColor = function (c) {
          c = c.toLowerCase();
          var d = a[c];
          if (d)
            this.r = d[0],
              this.g = d[1],
              this.b = d[2];
          else if (c === "transparent")
            return this.r = this.g = this.b = this.a = 0,
              !0;
          return !!d
        }
        ,
        o.prototype.isColor = !0;
      var a = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
      t.exports = o
    }
      , {}],
    4: [function (e, t, r) {
      var o = e("./support")
        , n = e("./renderers/canvas")
        , s = e("./imageloader")
        , i = e("./nodeparser")
        , u = e("./nodecontainer")
        , a = e("./log")
        , c = e("./utils")
        , d = e("./clone")
        , g = e("./proxy").loadUrlDocument
        , F = c.getBounds
        , E = "data-html2canvas-node"
        , h = 0;
      function p(P, k) {
        var U = h++;
        if (k = k || {},
          k.logging && (a.options.logging = !0,
            a.options.start = Date.now()),
          k.async = typeof k.async == "undefined" ? !0 : k.async,
          k.allowTaint = typeof k.allowTaint == "undefined" ? !1 : k.allowTaint,
          k.removeContainer = typeof k.removeContainer == "undefined" ? !0 : k.removeContainer,
          k.javascriptEnabled = typeof k.javascriptEnabled == "undefined" ? !1 : k.javascriptEnabled,
          k.imageTimeout = typeof k.imageTimeout == "undefined" ? 1e4 : k.imageTimeout,
          k.renderer = typeof k.renderer == "function" ? k.renderer : n,
          k.strict = !!k.strict,
          typeof P == "string") {
          if (typeof k.proxy != "string")
            return Promise.reject("Proxy must be used when rendering url");
          var Q = k.width != null ? k.width : window.innerWidth
            , V = k.height != null ? k.height : window.innerHeight;
          return g(M(P), k.proxy, document, Q, V, k).then(function (tt) {
            return _(tt.contentWindow.document.documentElement, tt, k, Q, V)
          })
        }
        var G = (P === void 0 ? [document.documentElement] : P.length ? P : [P])[0];
        G.setAttribute(E + U, U);
        var Q = k.width != null ? k.width : G.ownerDocument.defaultView.innerWidth
          , V = k.height != null ? k.height : G.ownerDocument.defaultView.innerHeight;
        return v(G.ownerDocument, k, Q, V, U).then(function (st) {
          return typeof k.onrendered == "function" && (a("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"),
            k.onrendered(st)),
            st
        })
      }
      p.CanvasRenderer = n,
        p.NodeContainer = u,
        p.log = a,
        p.utils = c;
      var m = typeof document == "undefined" || typeof Object.create != "function" || typeof document.createElement("canvas").getContext != "function" ? function () {
        return Promise.reject("No canvas support")
      }
        : p;
      t.exports = m;
      function v(P, k, U, G, Q) {
        return d(P, P, U, G, k, P.defaultView.pageXOffset, P.defaultView.pageYOffset).then(function (V) {
          a("Document cloned");
          var st = E + Q
            , ct = "[" + st + "='" + Q + "']";
          P.querySelector(ct).removeAttribute(st);
          var tt = V.contentWindow
            , $t = tt.document.querySelector(ct)
            , Pt = typeof k.onclone == "function" ? Promise.resolve(k.onclone(tt.document)) : Promise.resolve(!0);
          return Pt.then(function () {
            return _($t, V, k, U, G)
          })
        })
      }
      function _(P, k, U, G, Q) {
        var V = k.contentWindow
          , st = new o(V.document)
          , ct = new s(U, st)
          , tt = F(P)
          , $t = U.type === "view" ? G : S(V.document)
          , Pt = U.type === "view" ? Q : R(V.document)
          , _t = new U.renderer($t, Pt, ct, U, document)
          , ie = new i(P, _t, st, ct, U);
        return ie.ready.then(function () {
          a("Finished rendering");
          var yt;
          return U.type === "view" ? yt = B(_t.canvas, {
            width: _t.canvas.width,
            height: _t.canvas.height,
            top: 0,
            left: 0,
            x: 0,
            y: 0
          }) : P === V.document.body || P === V.document.documentElement || U.canvas != null ? yt = _t.canvas : yt = B(_t.canvas, {
            width: U.width != null ? U.width : tt.width,
            height: U.height != null ? U.height : tt.height,
            top: tt.top,
            left: tt.left,
            x: 0,
            y: 0
          }),
            y(k, U),
            yt
        })
      }
      function y(P, k) {
        k.removeContainer && (P.parentNode.removeChild(P),
          a("Cleaned up container"))
      }
      function B(P, k) {
        var U = document.createElement("canvas")
          , G = Math.min(P.width - 1, Math.max(0, k.left))
          , Q = Math.min(P.width, Math.max(1, k.left + k.width))
          , V = Math.min(P.height - 1, Math.max(0, k.top))
          , st = Math.min(P.height, Math.max(1, k.top + k.height));
        U.width = k.width,
          U.height = k.height;
        var ct = Q - G
          , tt = st - V;
        return a("Cropping canvas at:", "left:", k.left, "top:", k.top, "width:", ct, "height:", tt),
          a("Resulting crop with width", k.width, "and height", k.height, "with x", G, "and y", V),
          U.getContext("2d").drawImage(P, G, V, ct, tt, k.x, k.y, ct, tt),
          U
      }
      function S(P) {
        return Math.max(Math.max(P.body.scrollWidth, P.documentElement.scrollWidth), Math.max(P.body.offsetWidth, P.documentElement.offsetWidth), Math.max(P.body.clientWidth, P.documentElement.clientWidth))
      }
      function R(P) {
        return Math.max(Math.max(P.body.scrollHeight, P.documentElement.scrollHeight), Math.max(P.body.offsetHeight, P.documentElement.offsetHeight), Math.max(P.body.clientHeight, P.documentElement.clientHeight))
      }
      function M(P) {
        var k = document.createElement("a");
        return k.href = P,
          k.href = k.href,
          k
      }
    }
      , {
      "./clone": 2,
      "./imageloader": 11,
      "./log": 13,
      "./nodecontainer": 14,
      "./nodeparser": 15,
      "./proxy": 16,
      "./renderers/canvas": 20,
      "./support": 22,
      "./utils": 26
    }],
    5: [function (e, t, r) {
      var o = e("./log")
        , n = e("./utils").smallImage;
      function s(i) {
        if (this.src = i,
          o("DummyImageContainer for", i),
          !this.promise || !this.image) {
          o("Initiating DummyImageContainer"),
            s.prototype.image = new Image;
          var u = this.image;
          s.prototype.promise = new Promise(function (a, c) {
            u.onload = a,
              u.onerror = c,
              u.src = n(),
              u.complete === !0 && a(u)
          }
          )
        }
      }
      t.exports = s
    }
      , {
      "./log": 13,
      "./utils": 26
    }],
    6: [function (e, t, r) {
      var o = e("./utils").smallImage;
      function n(s, i) {
        var u = document.createElement("div"), a = document.createElement("img"), c = document.createElement("span"), d = "Hidden Text", g, F;
        u.style.visibility = "hidden",
          u.style.fontFamily = s,
          u.style.fontSize = i,
          u.style.margin = 0,
          u.style.padding = 0,
          document.body.appendChild(u),
          a.src = o(),
          a.width = 1,
          a.height = 1,
          a.style.margin = 0,
          a.style.padding = 0,
          a.style.verticalAlign = "baseline",
          c.style.fontFamily = s,
          c.style.fontSize = i,
          c.style.margin = 0,
          c.style.padding = 0,
          c.appendChild(document.createTextNode(d)),
          u.appendChild(c),
          u.appendChild(a),
          g = a.offsetTop - c.offsetTop + 1,
          u.removeChild(c),
          u.appendChild(document.createTextNode(d)),
          u.style.lineHeight = "normal",
          a.style.verticalAlign = "super",
          F = a.offsetTop - u.offsetTop + 1,
          document.body.removeChild(u),
          this.baseline = g,
          this.lineWidth = 1,
          this.middle = F
      }
      t.exports = n
    }
      , {
      "./utils": 26
    }],
    7: [function (e, t, r) {
      var o = e("./font");
      function n() {
        this.data = {}
      }
      n.prototype.getMetrics = function (s, i) {
        return this.data[s + "-" + i] === void 0 && (this.data[s + "-" + i] = new o(s, i)),
          this.data[s + "-" + i]
      }
        ,
        t.exports = n
    }
      , {
      "./font": 6
    }],
    8: [function (e, t, r) {
      var o = e("./utils")
        , n = o.getBounds
        , s = e("./proxy").loadUrlDocument;
      function i(u, a, c) {
        this.image = null,
          this.src = u;
        var d = this
          , g = n(u);
        this.promise = (a ? new Promise(function (F) {
          u.contentWindow.document.URL === "about:blank" || u.contentWindow.document.documentElement == null ? u.contentWindow.onload = u.onload = function () {
            F(u)
          }
            : F(u)
        }
        ) : this.proxyLoad(c.proxy, g, c)).then(function (F) {
          var E = e("./core");
          return E(F.contentWindow.document.documentElement, {
            type: "view",
            width: F.width,
            height: F.height,
            proxy: c.proxy,
            javascriptEnabled: c.javascriptEnabled,
            removeContainer: c.removeContainer,
            allowTaint: c.allowTaint,
            imageTimeout: c.imageTimeout / 2
          })
        }).then(function (F) {
          return d.image = F
        })
      }
      i.prototype.proxyLoad = function (u, a, c) {
        var d = this.src;
        return s(d.src, u, d.ownerDocument, a.width, a.height, c)
      }
        ,
        t.exports = i
    }
      , {
      "./core": 4,
      "./proxy": 16,
      "./utils": 26
    }],
    9: [function (e, t, r) {
      function o(n) {
        this.src = n.value,
          this.colorStops = [],
          this.type = null,
          this.x0 = .5,
          this.y0 = .5,
          this.x1 = .5,
          this.y1 = .5,
          this.promise = Promise.resolve(!0)
      }
      o.TYPES = {
        LINEAR: 1,
        RADIAL: 2
      },
        o.REGEXP_COLORSTOP = /^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i,
        t.exports = o
    }
      , {}],
    10: [function (e, t, r) {
      function o(n, s) {
        this.src = n,
          this.image = new Image;
        var i = this;
        this.tainted = null,
          this.promise = new Promise(function (u, a) {
            i.image.onload = u,
              i.image.onerror = a,
              s && (i.image.crossOrigin = "anonymous"),
              i.image.src = n,
              i.image.complete === !0 && u(i.image)
          }
          )
      }
      t.exports = o
    }
      , {}],
    11: [function (e, t, r) {
      var o = e("./log")
        , n = e("./imagecontainer")
        , s = e("./dummyimagecontainer")
        , i = e("./proxyimagecontainer")
        , u = e("./framecontainer")
        , a = e("./svgcontainer")
        , c = e("./svgnodecontainer")
        , d = e("./lineargradientcontainer")
        , g = e("./webkitgradientcontainer")
        , F = e("./utils").bind;
      function E(h, p) {
        this.link = null,
          this.options = h,
          this.support = p,
          this.origin = this.getOrigin(window.location.href)
      }
      E.prototype.findImages = function (h) {
        var p = [];
        return h.reduce(function (m, v) {
          switch (v.node.nodeName) {
            case "IMG":
              return m.concat([{
                args: [v.node.src],
                method: "url"
              }]);
            case "svg":
            case "IFRAME":
              return m.concat([{
                args: [v.node],
                method: v.node.nodeName
              }])
          }
          return m
        }, []).forEach(this.addImage(p, this.loadImage), this),
          p
      }
        ,
        E.prototype.findBackgroundImage = function (h, p) {
          return p.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(h, this.loadImage), this),
            h
        }
        ,
        E.prototype.addImage = function (h, p) {
          return function (m) {
            m.args.forEach(function (v) {
              this.imageExists(h, v) || (h.splice(0, 0, p.call(this, m)),
                o("Added image #" + h.length, typeof v == "string" ? v.substring(0, 100) : v))
            }, this)
          }
        }
        ,
        E.prototype.hasImageBackground = function (h) {
          return h.method !== "none"
        }
        ,
        E.prototype.loadImage = function (h) {
          if (h.method === "url") {
            var p = h.args[0];
            return this.isSVG(p) && !this.support.svg && !this.options.allowTaint ? new a(p) : p.match(/data:image\/.*;base64,/i) ? new n(p.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, ""), !1) : this.isSameOrigin(p) || this.options.allowTaint === !0 || this.isSVG(p) ? new n(p, !1) : this.support.cors && !this.options.allowTaint && this.options.useCORS ? new n(p, !0) : this.options.proxy ? new i(p, this.options.proxy) : new s(p)
          } else
            return h.method === "linear-gradient" ? new d(h) : h.method === "gradient" ? new g(h) : h.method === "svg" ? new c(h.args[0], this.support.svg) : h.method === "IFRAME" ? new u(h.args[0], this.isSameOrigin(h.args[0].src), this.options) : new s(h)
        }
        ,
        E.prototype.isSVG = function (h) {
          return h.substring(h.length - 3).toLowerCase() === "svg" || a.prototype.isInline(h)
        }
        ,
        E.prototype.imageExists = function (h, p) {
          return h.some(function (m) {
            return m.src === p
          })
        }
        ,
        E.prototype.isSameOrigin = function (h) {
          return this.getOrigin(h) === this.origin
        }
        ,
        E.prototype.getOrigin = function (h) {
          var p = this.link || (this.link = document.createElement("a"));
          return p.href = h,
            p.href = p.href,
            p.protocol + p.hostname + p.port
        }
        ,
        E.prototype.getPromise = function (h) {
          return this.timeout(h, this.options.imageTimeout).catch(function () {
            var p = new s(h.src);
            return p.promise.then(function (m) {
              h.image = m
            })
          })
        }
        ,
        E.prototype.get = function (h) {
          var p = null;
          return this.images.some(function (m) {
            return (p = m).src === h
          }) ? p : null
        }
        ,
        E.prototype.fetch = function (h) {
          return this.images = h.reduce(F(this.findBackgroundImage, this), this.findImages(h)),
            this.images.forEach(function (p, m) {
              p.promise.then(function () {
                o("Succesfully loaded image #" + (m + 1), p)
              }, function (v) {
                o("Failed loading image #" + (m + 1), p, v)
              })
            }),
            this.ready = Promise.all(this.images.map(this.getPromise, this)),
            o("Finished searching images"),
            this
        }
        ,
        E.prototype.timeout = function (h, p) {
          var m, v = Promise.race([h.promise, new Promise(function (_, y) {
            m = setTimeout(function () {
              o("Timed out loading image", h),
                y(h)
            }, p)
          }
          )]).then(function (_) {
            return clearTimeout(m),
              _
          });
          return v.catch(function () {
            clearTimeout(m)
          }),
            v
        }
        ,
        t.exports = E
    }
      , {
      "./dummyimagecontainer": 5,
      "./framecontainer": 8,
      "./imagecontainer": 10,
      "./lineargradientcontainer": 12,
      "./log": 13,
      "./proxyimagecontainer": 17,
      "./svgcontainer": 23,
      "./svgnodecontainer": 24,
      "./utils": 26,
      "./webkitgradientcontainer": 27
    }],
    12: [function (e, t, r) {
      var o = e("./gradientcontainer")
        , n = e("./color");
      function s(i) {
        o.apply(this, arguments),
          this.type = o.TYPES.LINEAR;
        var u = s.REGEXP_DIRECTION.test(i.args[0]) || !o.REGEXP_COLORSTOP.test(i.args[0]);
        u ? i.args[0].split(/\s+/).reverse().forEach(function (a, c) {
          switch (a) {
            case "left":
              this.x0 = 0,
                this.x1 = 1;
              break;
            case "top":
              this.y0 = 0,
                this.y1 = 1;
              break;
            case "right":
              this.x0 = 1,
                this.x1 = 0;
              break;
            case "bottom":
              this.y0 = 1,
                this.y1 = 0;
              break;
            case "to":
              var d = this.y0
                , g = this.x0;
              this.y0 = this.y1,
                this.x0 = this.x1,
                this.x1 = g,
                this.y1 = d;
              break;
            case "center":
              break;
            default:
              var F = parseFloat(a, 10) * .01;
              if (isNaN(F))
                break;
              c === 0 ? (this.y0 = F,
                this.y1 = 1 - this.y0) : (this.x0 = F,
                  this.x1 = 1 - this.x0);
              break
          }
        }, this) : (this.y0 = 0,
          this.y1 = 1),
          this.colorStops = i.args.slice(u ? 1 : 0).map(function (a) {
            var c = a.match(o.REGEXP_COLORSTOP)
              , d = +c[2]
              , g = d === 0 ? "%" : c[3];
            return {
              color: new n(c[1]),
              stop: g === "%" ? d / 100 : null
            }
          }),
          this.colorStops[0].stop === null && (this.colorStops[0].stop = 0),
          this.colorStops[this.colorStops.length - 1].stop === null && (this.colorStops[this.colorStops.length - 1].stop = 1),
          this.colorStops.forEach(function (a, c) {
            a.stop === null && this.colorStops.slice(c).some(function (d, g) {
              return d.stop !== null ? (a.stop = (d.stop - this.colorStops[c - 1].stop) / (g + 1) + this.colorStops[c - 1].stop,
                !0) : !1
            }, this)
          }, this)
      }
      s.prototype = Object.create(o.prototype),
        s.REGEXP_DIRECTION = /^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i,
        t.exports = s
    }
      , {
      "./color": 3,
      "./gradientcontainer": 9
    }],
    13: [function (e, t, r) {
      var o = function () {
        o.options.logging && window.console && window.console.log && Function.prototype.bind.call(window.console.log, window.console).apply(window.console, [Date.now() - o.options.start + "ms", "html2canvas:"].concat([].slice.call(arguments, 0)))
      };
      o.options = {
        logging: !1
      },
        t.exports = o
    }
      , {}],
    14: [function (e, t, r) {
      var o = e("./color")
        , n = e("./utils")
        , s = n.getBounds
        , i = n.parseBackgrounds
        , u = n.offsetBounds;
      function a(h, p) {
        this.node = h,
          this.parent = p,
          this.stack = null,
          this.bounds = null,
          this.borders = null,
          this.clip = [],
          this.backgroundClip = [],
          this.offsetBounds = null,
          this.visible = null,
          this.computedStyles = null,
          this.colors = {},
          this.styles = {},
          this.backgroundImages = null,
          this.transformData = null,
          this.transformMatrix = null,
          this.isPseudoElement = !1,
          this.opacity = null
      }
      a.prototype.cloneTo = function (h) {
        h.visible = this.visible,
          h.borders = this.borders,
          h.bounds = this.bounds,
          h.clip = this.clip,
          h.backgroundClip = this.backgroundClip,
          h.computedStyles = this.computedStyles,
          h.styles = this.styles,
          h.backgroundImages = this.backgroundImages,
          h.opacity = this.opacity
      }
        ,
        a.prototype.getOpacity = function () {
          return this.opacity === null ? this.opacity = this.cssFloat("opacity") : this.opacity
        }
        ,
        a.prototype.assignStack = function (h) {
          this.stack = h,
            h.children.push(this)
        }
        ,
        a.prototype.isElementVisible = function () {
          return this.node.nodeType === Node.TEXT_NODE ? this.parent.visible : this.css("display") !== "none" && this.css("visibility") !== "hidden" && !this.node.hasAttribute("data-html2canvas-ignore") && (this.node.nodeName !== "INPUT" || this.node.getAttribute("type") !== "hidden")
        }
        ,
        a.prototype.css = function (h) {
          return this.computedStyles || (this.computedStyles = this.isPseudoElement ? this.parent.computedStyle(this.before ? ":before" : ":after") : this.computedStyle(null)),
            this.styles[h] || (this.styles[h] = this.computedStyles[h])
        }
        ,
        a.prototype.prefixedCss = function (h) {
          var p = ["webkit", "moz", "ms", "o"]
            , m = this.css(h);
          return m === void 0 && p.some(function (v) {
            return m = this.css(v + h.substr(0, 1).toUpperCase() + h.substr(1)),
              m !== void 0
          }, this),
            m === void 0 ? null : m
        }
        ,
        a.prototype.computedStyle = function (h) {
          return this.node.ownerDocument.defaultView.getComputedStyle(this.node, h)
        }
        ,
        a.prototype.cssInt = function (h) {
          var p = parseInt(this.css(h), 10);
          return isNaN(p) ? 0 : p
        }
        ,
        a.prototype.color = function (h) {
          return this.colors[h] || (this.colors[h] = new o(this.css(h)))
        }
        ,
        a.prototype.cssFloat = function (h) {
          var p = parseFloat(this.css(h));
          return isNaN(p) ? 0 : p
        }
        ,
        a.prototype.fontWeight = function () {
          var h = this.css("fontWeight");
          switch (parseInt(h, 10)) {
            case 401:
              h = "bold";
              break;
            case 400:
              h = "normal";
              break
          }
          return h
        }
        ,
        a.prototype.parseClip = function () {
          var h = this.css("clip").match(this.CLIP);
          return h ? {
            top: parseInt(h[1], 10),
            right: parseInt(h[2], 10),
            bottom: parseInt(h[3], 10),
            left: parseInt(h[4], 10)
          } : null
        }
        ,
        a.prototype.parseBackgroundImages = function () {
          return this.backgroundImages || (this.backgroundImages = i(this.css("backgroundImage")))
        }
        ,
        a.prototype.cssList = function (h, p) {
          var m = (this.css(h) || "").split(",");
          return m = m[p || 0] || m[0] || "auto",
            m = m.trim().split(" "),
            m.length === 1 && (m = [m[0], g(m[0]) ? "auto" : m[0]]),
            m
        }
        ,
        a.prototype.parseBackgroundSize = function (h, p, m) {
          var v = this.cssList("backgroundSize", m), _, y;
          if (g(v[0]))
            _ = h.width * parseFloat(v[0]) / 100;
          else if (/contain|cover/.test(v[0])) {
            var B = h.width / h.height
              , S = p.width / p.height;
            return B < S ^ v[0] === "contain" ? {
              width: h.height * S,
              height: h.height
            } : {
              width: h.width,
              height: h.width / S
            }
          } else
            _ = parseInt(v[0], 10);
          return v[0] === "auto" && v[1] === "auto" ? y = p.height : v[1] === "auto" ? y = _ / p.width * p.height : g(v[1]) ? y = h.height * parseFloat(v[1]) / 100 : y = parseInt(v[1], 10),
            v[0] === "auto" && (_ = y / p.height * p.width),
          {
            width: _,
            height: y
          }
        }
        ,
        a.prototype.parseBackgroundPosition = function (h, p, m, v) {
          var _ = this.cssList("backgroundPosition", m), y, B;
          return g(_[0]) ? y = (h.width - (v || p).width) * (parseFloat(_[0]) / 100) : y = parseInt(_[0], 10),
            _[1] === "auto" ? B = y / p.width * p.height : g(_[1]) ? B = (h.height - (v || p).height) * parseFloat(_[1]) / 100 : B = parseInt(_[1], 10),
            _[0] === "auto" && (y = B / p.height * p.width),
          {
            left: y,
            top: B
          }
        }
        ,
        a.prototype.parseBackgroundRepeat = function (h) {
          return this.cssList("backgroundRepeat", h)[0]
        }
        ,
        a.prototype.parseTextShadows = function () {
          var h = this.css("textShadow")
            , p = [];
          if (h && h !== "none")
            for (var m = h.match(this.TEXT_SHADOW_PROPERTY), v = 0; m && v < m.length; v++) {
              var _ = m[v].match(this.TEXT_SHADOW_VALUES);
              p.push({
                color: new o(_[0]),
                offsetX: _[1] ? parseFloat(_[1].replace("px", "")) : 0,
                offsetY: _[2] ? parseFloat(_[2].replace("px", "")) : 0,
                blur: _[3] ? _[3].replace("px", "") : 0
              })
            }
          return p
        }
        ,
        a.prototype.parseTransform = function () {
          if (!this.transformData)
            if (this.hasTransform()) {
              var h = this.parseBounds()
                , p = this.prefixedCss("transformOrigin").split(" ").map(F).map(E);
              p[0] += h.left,
                p[1] += h.top,
                this.transformData = {
                  origin: p,
                  matrix: this.parseTransformMatrix()
                }
            } else
              this.transformData = {
                origin: [0, 0],
                matrix: [1, 0, 0, 1, 0, 0]
              };
          return this.transformData
        }
        ,
        a.prototype.parseTransformMatrix = function () {
          if (!this.transformMatrix) {
            var h = this.prefixedCss("transform")
              , p = h ? d(h.match(this.MATRIX_PROPERTY)) : null;
            this.transformMatrix = p || [1, 0, 0, 1, 0, 0]
          }
          return this.transformMatrix
        }
        ,
        a.prototype.parseBounds = function () {
          return this.bounds || (this.bounds = this.hasTransform() ? u(this.node) : s(this.node))
        }
        ,
        a.prototype.hasTransform = function () {
          return this.parseTransformMatrix().join(",") !== "1,0,0,1,0,0" || this.parent && this.parent.hasTransform()
        }
        ,
        a.prototype.getValue = function () {
          var h = this.node.value || "";
          return this.node.tagName === "SELECT" ? h = c(this.node) : this.node.type === "password" && (h = Array(h.length + 1).join("\u2022")),
            h.length === 0 ? this.node.placeholder || "" : h
        }
        ,
        a.prototype.MATRIX_PROPERTY = /(matrix|matrix3d)\((.+)\)/,
        a.prototype.TEXT_SHADOW_PROPERTY = /((rgba|rgb)\([^\)]+\)(\s-?\d+(?:\.\d+)?px){0,})/g,
        a.prototype.TEXT_SHADOW_VALUES = /(-?\d+(?:\.\d+)?px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,
        a.prototype.CLIP = /^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/;
      function c(h) {
        var p = h.options[h.selectedIndex || 0];
        return p && p.text || ""
      }
      function d(h) {
        if (h && h[1] === "matrix")
          return h[2].split(",").map(function (m) {
            return parseFloat(m.trim())
          });
        if (h && h[1] === "matrix3d") {
          var p = h[2].split(",").map(function (m) {
            return parseFloat(m.trim())
          });
          return [p[0], p[1], p[4], p[5], p[12], p[13]]
        }
      }
      function g(h) {
        return h.toString().indexOf("%") !== -1
      }
      function F(h) {
        return h.replace("px", "")
      }
      function E(h) {
        return parseFloat(h)
      }
      t.exports = a
    }
      , {
      "./color": 3,
      "./utils": 26
    }],
    15: [function (e, t, r) {
      var o = e("./log")
        , n = e("punycode")
        , s = e("./nodecontainer")
        , i = e("./textcontainer")
        , u = e("./pseudoelementcontainer")
        , a = e("./fontmetrics")
        , c = e("./color")
        , d = e("./stackingcontext")
        , g = e("./utils")
        , F = g.bind
        , E = g.getBounds
        , h = g.parseBackgrounds
        , p = g.offsetBounds;
      function m(l, w, C, b, A) {
        o("Starting NodeParser"),
          this.renderer = w,
          this.options = A,
          this.range = null,
          this.support = C,
          this.renderQueue = [],
          this.stack = new d(!0, 1, l.ownerDocument, null);
        var N = new s(l, null);
        if (A.background && w.rectangle(0, 0, w.width, w.height, new c(A.background)),
          l === l.ownerDocument.documentElement) {
          var D = new s(N.color("backgroundColor").isTransparent() ? l.ownerDocument.body : l.ownerDocument.documentElement, null);
          w.rectangle(0, 0, w.width, w.height, D.color("backgroundColor"))
        }
        N.visibile = N.isElementVisible(),
          this.createPseudoHideStyles(l.ownerDocument),
          this.disableAnimations(l.ownerDocument),
          this.nodes = Z([N].concat(this.getChildren(N)).filter(function (L) {
            return L.visible = L.isElementVisible()
          }).map(this.getPseudoElements, this)),
          this.fontMetrics = new a,
          o("Fetched nodes, total:", this.nodes.length),
          o("Calculate overflow clips"),
          this.calculateOverflowClips(),
          o("Start fetching images"),
          this.images = b.fetch(this.nodes.filter(X)),
          this.ready = this.images.ready.then(F(function () {
            return o("Images loaded, starting parsing"),
              o("Creating stacking contexts"),
              this.createStackingContexts(),
              o("Sorting stacking contexts"),
              this.sortStackingContexts(this.stack),
              this.parse(this.stack),
              o("Render queue created with " + this.renderQueue.length + " items"),
              new Promise(F(function (L) {
                A.async ? typeof A.async == "function" ? A.async.call(this, this.renderQueue, L) : this.renderQueue.length > 0 ? (this.renderIndex = 0,
                  this.asyncRenderer(this.renderQueue, L)) : L() : (this.renderQueue.forEach(this.paint, this),
                    L())
              }, this))
          }, this))
      }
      m.prototype.calculateOverflowClips = function () {
        this.nodes.forEach(function (l) {
          if (X(l)) {
            Y(l) && l.appendToDOM(),
              l.borders = this.parseBorders(l);
            var w = l.css("overflow") === "hidden" ? [l.borders.clip] : []
              , C = l.parseClip();
            C && ["absolute", "fixed"].indexOf(l.css("position")) !== -1 && w.push([["rect", l.bounds.left + C.left, l.bounds.top + C.top, C.right - C.left, C.bottom - C.top]]),
              l.clip = v(l) ? l.parent.clip.concat(w) : w,
              l.backgroundClip = l.css("overflow") !== "hidden" ? l.clip.concat([l.borders.clip]) : l.clip,
              Y(l) && l.cleanDOM()
          } else
            it(l) && (l.clip = v(l) ? l.parent.clip : []);
          Y(l) || (l.bounds = null)
        }, this)
      }
        ;
      function v(l) {
        return l.parent && l.parent.clip.length
      }
      m.prototype.asyncRenderer = function (l, w, C) {
        C = C || Date.now(),
          this.paint(l[this.renderIndex++]),
          l.length === this.renderIndex ? w() : C + 20 > Date.now() ? this.asyncRenderer(l, w, C) : setTimeout(F(function () {
            this.asyncRenderer(l, w)
          }, this), 0)
      }
        ,
        m.prototype.createPseudoHideStyles = function (l) {
          this.createStyles(l, "." + u.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + ':before { content: "" !important; display: none !important; }.' + u.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER + ':after { content: "" !important; display: none !important; }')
        }
        ,
        m.prototype.disableAnimations = function (l) {
          this.createStyles(l, "* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")
        }
        ,
        m.prototype.createStyles = function (l, w) {
          var C = l.createElement("style");
          C.innerHTML = w,
            l.body.appendChild(C)
        }
        ,
        m.prototype.getPseudoElements = function (l) {
          var w = [[l]];
          if (l.node.nodeType === Node.ELEMENT_NODE) {
            var C = this.getPseudoElement(l, ":before")
              , b = this.getPseudoElement(l, ":after");
            C && w.push(C),
              b && w.push(b)
          }
          return Z(w)
        }
        ;
      function _(l) {
        return l.replace(/(\-[a-z])/g, function (w) {
          return w.toUpperCase().replace("-", "")
        })
      }
      m.prototype.getPseudoElement = function (l, w) {
        var C = l.computedStyle(w);
        if (!C || !C.content || C.content === "none" || C.content === "-moz-alt-content" || C.display === "none")
          return null;
        for (var b = dt(C.content), A = b.substr(0, 3) === "url", N = document.createElement(A ? "img" : "html2canvaspseudoelement"), D = new u(N, l, w), L = C.length - 1; L >= 0; L--) {
          var H = _(C.item(L));
          N.style[H] = C[H]
        }
        if (N.className = u.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + u.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER,
          A)
          return N.src = h(b)[0].args[0],
            [D];
        var J = document.createTextNode(b);
        return N.appendChild(J),
          [D, new i(J, D)]
      }
        ,
        m.prototype.getChildren = function (l) {
          return Z([].filter.call(l.node.childNodes, _t).map(function (w) {
            var C = [w.nodeType === Node.TEXT_NODE ? new i(w, l) : new s(w, l)].filter(Ft);
            return w.nodeType === Node.ELEMENT_NODE && C.length && w.tagName !== "TEXTAREA" ? C[0].isElementVisible() ? C.concat(this.getChildren(C[0])) : [] : C
          }, this))
        }
        ,
        m.prototype.newStackingContext = function (l, w) {
          var C = new d(w, l.getOpacity(), l.node, l.parent);
          l.cloneTo(C);
          var b = w ? C.getParentStack(this) : C.parent.stack;
          b.contexts.push(C),
            l.stack = C
        }
        ,
        m.prototype.createStackingContexts = function () {
          this.nodes.forEach(function (l) {
            X(l) && (this.isRootElement(l) || lt(l) || ie(l) || this.isBodyWithTransparentRoot(l) || l.hasTransform()) ? this.newStackingContext(l, !0) : X(l) && (yt(l) && V(l) || j(l) || O(l)) ? this.newStackingContext(l, !1) : l.assignStack(l.parent.stack)
          }, this)
        }
        ,
        m.prototype.isBodyWithTransparentRoot = function (l) {
          return l.node.nodeName === "BODY" && l.parent.color("backgroundColor").isTransparent()
        }
        ,
        m.prototype.isRootElement = function (l) {
          return l.parent === null
        }
        ,
        m.prototype.sortStackingContexts = function (l) {
          l.contexts.sort(et(l.contexts.slice(0))),
            l.contexts.forEach(this.sortStackingContexts, this)
        }
        ,
        m.prototype.parseTextBounds = function (l) {
          return function (w, C, b) {
            if (l.parent.css("textDecoration").substr(0, 4) !== "none" || w.trim().length !== 0) {
              if (this.support.rangeBounds && !l.parent.hasTransform()) {
                var A = b.slice(0, C).join("").length;
                return this.getRangeBounds(l.node, A, w.length)
              } else if (l.node && typeof l.node.data == "string") {
                var N = l.node.splitText(w.length)
                  , D = this.getWrapperBounds(l.node, l.parent.hasTransform());
                return l.node = N,
                  D
              }
            } else
              (!this.support.rangeBounds || l.parent.hasTransform()) && (l.node = l.node.splitText(w.length));
            return {}
          }
        }
        ,
        m.prototype.getWrapperBounds = function (l, w) {
          var C = l.ownerDocument.createElement("html2canvaswrapper")
            , b = l.parentNode
            , A = l.cloneNode(!0);
          C.appendChild(l.cloneNode(!0)),
            b.replaceChild(C, l);
          var N = w ? p(C) : E(C);
          return b.replaceChild(A, C),
            N
        }
        ,
        m.prototype.getRangeBounds = function (l, w, C) {
          var b = this.range || (this.range = l.ownerDocument.createRange());
          return b.setStart(l, w),
            b.setEnd(l, w + C),
            b.getBoundingClientRect()
        }
        ;
      function y() { }
      m.prototype.parse = function (l) {
        var w = l.contexts.filter(G)
          , C = l.children.filter(X)
          , b = C.filter(W(O))
          , A = b.filter(W(yt)).filter(W(st))
          , N = C.filter(W(yt)).filter(O)
          , D = b.filter(W(yt)).filter(st)
          , L = l.contexts.concat(b.filter(yt)).filter(V)
          , H = l.children.filter(it).filter(tt)
          , J = l.contexts.filter(Q);
        w.concat(A).concat(N).concat(D).concat(L).concat(H).concat(J).forEach(function (It) {
          this.renderQueue.push(It),
            ct(It) && (this.parse(It),
              this.renderQueue.push(new y))
        }, this)
      }
        ,
        m.prototype.paint = function (l) {
          try {
            l instanceof y ? this.renderer.ctx.restore() : it(l) ? (Y(l.parent) && l.parent.appendToDOM(),
              this.paintText(l),
              Y(l.parent) && l.parent.cleanDOM()) : this.paintNode(l)
          } catch (w) {
            if (o(w),
              this.options.strict)
              throw w
          }
        }
        ,
        m.prototype.paintNode = function (l) {
          ct(l) && (this.renderer.setOpacity(l.opacity),
            this.renderer.ctx.save(),
            l.hasTransform() && this.renderer.setTransform(l.parseTransform())),
            l.node.nodeName === "INPUT" && l.node.type === "checkbox" ? this.paintCheckbox(l) : l.node.nodeName === "INPUT" && l.node.type === "radio" ? this.paintRadio(l) : this.paintElement(l)
        }
        ,
        m.prototype.paintElement = function (l) {
          var w = l.parseBounds();
          this.renderer.clip(l.backgroundClip, function () {
            this.renderer.renderBackground(l, w, l.borders.borders.map(wt))
          }, this),
            this.renderer.clip(l.clip, function () {
              this.renderer.renderBorders(l.borders.borders)
            }, this),
            this.renderer.clip(l.backgroundClip, function () {
              switch (l.node.nodeName) {
                case "svg":
                case "IFRAME":
                  var C = this.images.get(l.node);
                  C ? this.renderer.renderImage(l, w, l.borders, C) : o("Error loading <" + l.node.nodeName + ">", l.node);
                  break;
                case "IMG":
                  var b = this.images.get(l.node.src);
                  b ? this.renderer.renderImage(l, w, l.borders, b) : o("Error loading <img>", l.node.src);
                  break;
                case "CANVAS":
                  this.renderer.renderImage(l, w, l.borders, {
                    image: l.node
                  });
                  break;
                case "SELECT":
                case "INPUT":
                case "TEXTAREA":
                  this.paintFormValue(l);
                  break
              }
            }, this)
        }
        ,
        m.prototype.paintCheckbox = function (l) {
          var w = l.parseBounds()
            , C = Math.min(w.width, w.height)
            , b = {
              width: C - 1,
              height: C - 1,
              top: w.top,
              left: w.left
            }
            , A = [3, 3]
            , N = [A, A, A, A]
            , D = [1, 1, 1, 1].map(function (H) {
              return {
                color: new c("#A5A5A5"),
                width: H
              }
            })
            , L = M(b, N, D);
          this.renderer.clip(l.backgroundClip, function () {
            this.renderer.rectangle(b.left + 1, b.top + 1, b.width - 2, b.height - 2, new c("#DEDEDE")),
              this.renderer.renderBorders(S(D, b, L, N)),
              l.node.checked && (this.renderer.font(new c("#424242"), "normal", "normal", "bold", C - 3 + "px", "arial"),
                this.renderer.text("\u2714", b.left + C / 6, b.top + C - 1))
          }, this)
        }
        ,
        m.prototype.paintRadio = function (l) {
          var w = l.parseBounds()
            , C = Math.min(w.width, w.height) - 2;
          this.renderer.clip(l.backgroundClip, function () {
            this.renderer.circleStroke(w.left + 1, w.top + 1, C, new c("#DEDEDE"), 1, new c("#A5A5A5")),
              l.node.checked && this.renderer.circle(Math.ceil(w.left + C / 4) + 1, Math.ceil(w.top + C / 4) + 1, Math.floor(C / 2), new c("#424242"))
          }, this)
        }
        ,
        m.prototype.paintFormValue = function (l) {
          var w = l.getValue();
          if (w.length > 0) {
            var C = l.node.ownerDocument
              , b = C.createElement("html2canvaswrapper")
              , A = ["lineHeight", "textAlign", "fontFamily", "fontWeight", "fontSize", "color", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "width", "height", "borderLeftStyle", "borderTopStyle", "borderLeftWidth", "borderTopWidth", "boxSizing", "whiteSpace", "wordWrap"];
            A.forEach(function (D) {
              try {
                b.style[D] = l.css(D)
              } catch (L) {
                o("html2canvas: Parse: Exception caught in renderFormValue: " + L.message)
              }
            });
            var N = l.parseBounds();
            b.style.position = "fixed",
              b.style.left = N.left + "px",
              b.style.top = N.top + "px",
              b.textContent = w,
              C.body.appendChild(b),
              this.paintText(new i(b.firstChild, l)),
              C.body.removeChild(b)
          }
        }
        ,
        m.prototype.paintText = function (l) {
          l.applyTextTransform();
          var w = n.ucs2.decode(l.node.data)
            , C = (!this.options.letterRendering || $t(l)) && !St(l.node.data) ? gt(w) : w.map(function (L) {
              return n.ucs2.encode([L])
            })
            , b = l.parent.fontWeight()
            , A = l.parent.css("fontSize")
            , N = l.parent.css("fontFamily")
            , D = l.parent.parseTextShadows();
          this.renderer.font(l.parent.color("color"), l.parent.css("fontStyle"), l.parent.css("fontVariant"), b, A, N),
            D.length ? this.renderer.fontShadow(D[0].color, D[0].offsetX, D[0].offsetY, D[0].blur) : this.renderer.clearShadow(),
            this.renderer.clip(l.parent.clip, function () {
              C.map(this.parseTextBounds(l), this).forEach(function (L, H) {
                L && (this.renderer.text(C[H], L.left, L.bottom),
                  this.renderTextDecoration(l.parent, L, this.fontMetrics.getMetrics(N, A)))
              }, this)
            }, this)
        }
        ,
        m.prototype.renderTextDecoration = function (l, w, C) {
          switch (l.css("textDecoration").split(" ")[0]) {
            case "underline":
              this.renderer.rectangle(w.left, Math.round(w.top + C.baseline + C.lineWidth), w.width, 1, l.color("color"));
              break;
            case "overline":
              this.renderer.rectangle(w.left, Math.round(w.top), w.width, 1, l.color("color"));
              break;
            case "line-through":
              this.renderer.rectangle(w.left, Math.ceil(w.top + C.middle + C.lineWidth), w.width, 1, l.color("color"));
              break
          }
        }
        ;
      var B = {
        inset: [["darken", .6], ["darken", .1], ["darken", .1], ["darken", .6]]
      };
      m.prototype.parseBorders = function (l) {
        var w = l.parseBounds()
          , C = Pt(l)
          , b = ["Top", "Right", "Bottom", "Left"].map(function (N, D) {
            var L = l.css("border" + N + "Style")
              , H = l.color("border" + N + "Color");
            L === "inset" && H.isBlack() && (H = new c([255, 255, 255, H.a]));
            var J = B[L] ? B[L][D] : null;
            return {
              width: l.cssInt("border" + N + "Width"),
              color: J ? H[J[0]](J[1]) : H,
              args: null
            }
          })
          , A = M(w, C, b);
        return {
          clip: this.parseBackgroundClip(l, A, b, C, w),
          borders: S(b, w, A, C)
        }
      }
        ;
      function S(l, w, C, b) {
        return l.map(function (A, N) {
          if (A.width > 0) {
            var D = w.left
              , L = w.top
              , H = w.width
              , J = w.height - l[2].width;
            switch (N) {
              case 0:
                J = l[0].width,
                  A.args = k({
                    c1: [D, L],
                    c2: [D + H, L],
                    c3: [D + H - l[1].width, L + J],
                    c4: [D + l[3].width, L + J]
                  }, b[0], b[1], C.topLeftOuter, C.topLeftInner, C.topRightOuter, C.topRightInner);
                break;
              case 1:
                D = w.left + w.width - l[1].width,
                  H = l[1].width,
                  A.args = k({
                    c1: [D + H, L],
                    c2: [D + H, L + J + l[2].width],
                    c3: [D, L + J],
                    c4: [D, L + l[0].width]
                  }, b[1], b[2], C.topRightOuter, C.topRightInner, C.bottomRightOuter, C.bottomRightInner);
                break;
              case 2:
                L = L + w.height - l[2].width,
                  J = l[2].width,
                  A.args = k({
                    c1: [D + H, L + J],
                    c2: [D, L + J],
                    c3: [D + l[3].width, L],
                    c4: [D + H - l[3].width, L]
                  }, b[2], b[3], C.bottomRightOuter, C.bottomRightInner, C.bottomLeftOuter, C.bottomLeftInner);
                break;
              case 3:
                H = l[3].width,
                  A.args = k({
                    c1: [D, L + J + l[2].width],
                    c2: [D, L],
                    c3: [D + H, L + l[0].width],
                    c4: [D + H, L + J]
                  }, b[3], b[0], C.bottomLeftOuter, C.bottomLeftInner, C.topLeftOuter, C.topLeftInner);
                break
            }
          }
          return A
        })
      }
      m.prototype.parseBackgroundClip = function (l, w, C, b, A) {
        var N = l.css("backgroundClip")
          , D = [];
        switch (N) {
          case "content-box":
          case "padding-box":
            U(D, b[0], b[1], w.topLeftInner, w.topRightInner, A.left + C[3].width, A.top + C[0].width),
              U(D, b[1], b[2], w.topRightInner, w.bottomRightInner, A.left + A.width - C[1].width, A.top + C[0].width),
              U(D, b[2], b[3], w.bottomRightInner, w.bottomLeftInner, A.left + A.width - C[1].width, A.top + A.height - C[2].width),
              U(D, b[3], b[0], w.bottomLeftInner, w.topLeftInner, A.left + C[3].width, A.top + A.height - C[2].width);
            break;
          default:
            U(D, b[0], b[1], w.topLeftOuter, w.topRightOuter, A.left, A.top),
              U(D, b[1], b[2], w.topRightOuter, w.bottomRightOuter, A.left + A.width, A.top),
              U(D, b[2], b[3], w.bottomRightOuter, w.bottomLeftOuter, A.left + A.width, A.top + A.height),
              U(D, b[3], b[0], w.bottomLeftOuter, w.topLeftOuter, A.left, A.top + A.height);
            break
        }
        return D
      }
        ;
      function R(l, w, C, b) {
        var A = 4 * ((Math.sqrt(2) - 1) / 3)
          , N = C * A
          , D = b * A
          , L = l + C
          , H = w + b;
        return {
          topLeft: P({
            x: l,
            y: H
          }, {
            x: l,
            y: H - D
          }, {
            x: L - N,
            y: w
          }, {
            x: L,
            y: w
          }),
          topRight: P({
            x: l,
            y: w
          }, {
            x: l + N,
            y: w
          }, {
            x: L,
            y: H - D
          }, {
            x: L,
            y: H
          }),
          bottomRight: P({
            x: L,
            y: w
          }, {
            x: L,
            y: w + D
          }, {
            x: l + N,
            y: H
          }, {
            x: l,
            y: H
          }),
          bottomLeft: P({
            x: L,
            y: H
          }, {
            x: L - N,
            y: H
          }, {
            x: l,
            y: w + D
          }, {
            x: l,
            y: w
          })
        }
      }
      function M(l, w, C) {
        var b = l.left
          , A = l.top
          , N = l.width
          , D = l.height
          , L = w[0][0] < N / 2 ? w[0][0] : N / 2
          , H = w[0][1] < D / 2 ? w[0][1] : D / 2
          , J = w[1][0] < N / 2 ? w[1][0] : N / 2
          , It = w[1][1] < D / 2 ? w[1][1] : D / 2
          , Vt = w[2][0] < N / 2 ? w[2][0] : N / 2
          , Le = w[2][1] < D / 2 ? w[2][1] : D / 2
          , En = w[3][0] < N / 2 ? w[3][0] : N / 2
          , $e = w[3][1] < D / 2 ? w[3][1] : D / 2
          , Pe = N - J
          , Cn = D - Le
          , _n = N - Vt
          , Fn = D - $e;
        return {
          topLeftOuter: R(b, A, L, H).topLeft.subdivide(.5),
          topLeftInner: R(b + C[3].width, A + C[0].width, Math.max(0, L - C[3].width), Math.max(0, H - C[0].width)).topLeft.subdivide(.5),
          topRightOuter: R(b + Pe, A, J, It).topRight.subdivide(.5),
          topRightInner: R(b + Math.min(Pe, N + C[3].width), A + C[0].width, Pe > N + C[3].width ? 0 : J - C[3].width, It - C[0].width).topRight.subdivide(.5),
          bottomRightOuter: R(b + _n, A + Cn, Vt, Le).bottomRight.subdivide(.5),
          bottomRightInner: R(b + Math.min(_n, N - C[3].width), A + Math.min(Cn, D + C[0].width), Math.max(0, Vt - C[1].width), Le - C[2].width).bottomRight.subdivide(.5),
          bottomLeftOuter: R(b, A + Fn, En, $e).bottomLeft.subdivide(.5),
          bottomLeftInner: R(b + C[3].width, A + Fn, Math.max(0, En - C[3].width), $e - C[2].width).bottomLeft.subdivide(.5)
        }
      }
      function P(l, w, C, b) {
        var A = function (N, D, L) {
          return {
            x: N.x + (D.x - N.x) * L,
            y: N.y + (D.y - N.y) * L
          }
        };
        return {
          start: l,
          startControl: w,
          endControl: C,
          end: b,
          subdivide: function (N) {
            var D = A(l, w, N)
              , L = A(w, C, N)
              , H = A(C, b, N)
              , J = A(D, L, N)
              , It = A(L, H, N)
              , Vt = A(J, It, N);
            return [P(l, D, J, Vt), P(Vt, It, H, b)]
          },
          curveTo: function (N) {
            N.push(["bezierCurve", w.x, w.y, C.x, C.y, b.x, b.y])
          },
          curveToReversed: function (N) {
            N.push(["bezierCurve", C.x, C.y, w.x, w.y, l.x, l.y])
          }
        }
      }
      function k(l, w, C, b, A, N, D) {
        var L = [];
        return w[0] > 0 || w[1] > 0 ? (L.push(["line", b[1].start.x, b[1].start.y]),
          b[1].curveTo(L)) : L.push(["line", l.c1[0], l.c1[1]]),
          C[0] > 0 || C[1] > 0 ? (L.push(["line", N[0].start.x, N[0].start.y]),
            N[0].curveTo(L),
            L.push(["line", D[0].end.x, D[0].end.y]),
            D[0].curveToReversed(L)) : (L.push(["line", l.c2[0], l.c2[1]]),
              L.push(["line", l.c3[0], l.c3[1]])),
          w[0] > 0 || w[1] > 0 ? (L.push(["line", A[1].end.x, A[1].end.y]),
            A[1].curveToReversed(L)) : L.push(["line", l.c4[0], l.c4[1]]),
          L
      }
      function U(l, w, C, b, A, N, D) {
        w[0] > 0 || w[1] > 0 ? (l.push(["line", b[0].start.x, b[0].start.y]),
          b[0].curveTo(l),
          b[1].curveTo(l)) : l.push(["line", N, D]),
          (C[0] > 0 || C[1] > 0) && l.push(["line", A[0].start.x, A[0].start.y])
      }
      function G(l) {
        return l.cssInt("zIndex") < 0
      }
      function Q(l) {
        return l.cssInt("zIndex") > 0
      }
      function V(l) {
        return l.cssInt("zIndex") === 0
      }
      function st(l) {
        return ["inline", "inline-block", "inline-table"].indexOf(l.css("display")) !== -1
      }
      function ct(l) {
        return l instanceof d
      }
      function tt(l) {
        return l.node.data.trim().length > 0
      }
      function $t(l) {
        return /^(normal|none|0px)$/.test(l.parent.css("letterSpacing"))
      }
      function Pt(l) {
        return ["TopLeft", "TopRight", "BottomRight", "BottomLeft"].map(function (w) {
          var C = l.css("border" + w + "Radius")
            , b = C.split(" ");
          return b.length <= 1 && (b[1] = b[0]),
            b.map(pt)
        })
      }
      function _t(l) {
        return l.nodeType === Node.TEXT_NODE || l.nodeType === Node.ELEMENT_NODE
      }
      function ie(l) {
        var w = l.css("position")
          , C = ["absolute", "relative", "fixed"].indexOf(w) !== -1 ? l.css("zIndex") : "auto";
        return C !== "auto"
      }
      function yt(l) {
        return l.css("position") !== "static"
      }
      function O(l) {
        return l.css("float") !== "none"
      }
      function j(l) {
        return ["inline-block", "inline-table"].indexOf(l.css("display")) !== -1
      }
      function W(l) {
        var w = this;
        return function () {
          return !l.apply(w, arguments)
        }
      }
      function X(l) {
        return l.node.nodeType === Node.ELEMENT_NODE
      }
      function Y(l) {
        return l.isPseudoElement === !0
      }
      function it(l) {
        return l.node.nodeType === Node.TEXT_NODE
      }
      function et(l) {
        return function (w, C) {
          return w.cssInt("zIndex") + l.indexOf(w) / l.length - (C.cssInt("zIndex") + l.indexOf(C) / l.length)
        }
      }
      function lt(l) {
        return l.getOpacity() < 1
      }
      function pt(l) {
        return parseInt(l, 10)
      }
      function wt(l) {
        return l.width
      }
      function Ft(l) {
        return l.node.nodeType !== Node.ELEMENT_NODE || ["SCRIPT", "HEAD", "TITLE", "OBJECT", "BR", "OPTION"].indexOf(l.node.nodeName) === -1
      }
      function Z(l) {
        return [].concat.apply([], l)
      }
      function dt(l) {
        var w = l.substr(0, 1);
        return w === l.substr(l.length - 1) && w.match(/'|"/) ? l.substr(1, l.length - 2) : l
      }
      function gt(l) {
        for (var w = [], C = 0, b = !1, A; l.length;)
          bt(l[C]) === b ? (A = l.splice(0, C),
            A.length && w.push(n.ucs2.encode(A)),
            b = !b,
            C = 0) : C++,
            C >= l.length && (A = l.splice(0, C),
              A.length && w.push(n.ucs2.encode(A)));
        return w
      }
      function bt(l) {
        return [32, 13, 10, 9, 45].indexOf(l) !== -1
      }
      function St(l) {
        return /[^\u0000-\u00ff]/.test(l)
      }
      t.exports = m
    }
      , {
      "./color": 3,
      "./fontmetrics": 7,
      "./log": 13,
      "./nodecontainer": 14,
      "./pseudoelementcontainer": 18,
      "./stackingcontext": 21,
      "./textcontainer": 25,
      "./utils": 26,
      punycode: 1
    }],
    16: [function (e, t, r) {
      var o = e("./xhr")
        , n = e("./utils")
        , s = e("./log")
        , i = e("./clone")
        , u = n.decode64;
      function a(m, v, _) {
        var y = "withCredentials" in new XMLHttpRequest;
        if (!v)
          return Promise.reject("No proxy configured");
        var B = F(y)
          , S = E(v, m, B);
        return y ? o(S) : g(_, S, B).then(function (R) {
          return u(R.content)
        })
      }
      var c = 0;
      function d(m, v, _) {
        var y = "crossOrigin" in new Image
          , B = F(y)
          , S = E(v, m, B);
        return y ? Promise.resolve(S) : g(_, S, B).then(function (R) {
          return "data:" + R.type + ";base64," + R.content
        })
      }
      function g(m, v, _) {
        return new Promise(function (y, B) {
          var S = m.createElement("script")
            , R = function () {
              delete window.html2canvas.proxy[_],
                m.body.removeChild(S)
            };
          window.html2canvas.proxy[_] = function (M) {
            R(),
              y(M)
          }
            ,
            S.src = v,
            S.onerror = function (M) {
              R(),
                B(M)
            }
            ,
            m.body.appendChild(S)
        }
        )
      }
      function F(m) {
        return m ? "" : "html2canvas_" + Date.now() + "_" + ++c + "_" + Math.round(Math.random() * 1e5)
      }
      function E(m, v, _) {
        return m + "?url=" + encodeURIComponent(v) + (_.length ? "&callback=html2canvas.proxy." + _ : "")
      }
      function h(m) {
        return function (v) {
          var _ = new DOMParser, y;
          try {
            y = _.parseFromString(v, "text/html")
          } catch {
            s("DOMParser not supported, falling back to createHTMLDocument"),
              y = document.implementation.createHTMLDocument("");
            try {
              y.open(),
                y.write(v),
                y.close()
            } catch {
              s("createHTMLDocument write not supported, falling back to document.body.innerHTML"),
                y.body.innerHTML = v
            }
          }
          var B = y.querySelector("base");
          if (!B || !B.href.host) {
            var S = y.createElement("base");
            S.href = m,
              y.head.insertBefore(S, y.head.firstChild)
          }
          return y
        }
      }
      function p(m, v, _, y, B, S) {
        return new a(m, v, window.document).then(h(m)).then(function (R) {
          return i(R, _, y, B, S, 0, 0)
        })
      }
      r.Proxy = a,
        r.ProxyURL = d,
        r.loadUrlDocument = p
    }
      , {
      "./clone": 2,
      "./log": 13,
      "./utils": 26,
      "./xhr": 28
    }],
    17: [function (e, t, r) {
      var o = e("./proxy").ProxyURL;
      function n(s, i) {
        var u = document.createElement("a");
        u.href = s,
          s = u.href,
          this.src = s,
          this.image = new Image;
        var a = this;
        this.promise = new Promise(function (c, d) {
          a.image.crossOrigin = "Anonymous",
            a.image.onload = c,
            a.image.onerror = d,
            new o(s, i, document).then(function (g) {
              a.image.src = g
            }).catch(d)
        }
        )
      }
      t.exports = n
    }
      , {
      "./proxy": 16
    }],
    18: [function (e, t, r) {
      var o = e("./nodecontainer");
      function n(s, i, u) {
        o.call(this, s, i),
          this.isPseudoElement = !0,
          this.before = u === ":before"
      }
      n.prototype.cloneTo = function (s) {
        n.prototype.cloneTo.call(this, s),
          s.isPseudoElement = !0,
          s.before = this.before
      }
        ,
        n.prototype = Object.create(o.prototype),
        n.prototype.appendToDOM = function () {
          this.before ? this.parent.node.insertBefore(this.node, this.parent.node.firstChild) : this.parent.node.appendChild(this.node),
            this.parent.node.className += " " + this.getHideClass()
        }
        ,
        n.prototype.cleanDOM = function () {
          this.node.parentNode.removeChild(this.node),
            this.parent.node.className = this.parent.node.className.replace(this.getHideClass(), "")
        }
        ,
        n.prototype.getHideClass = function () {
          return this["PSEUDO_HIDE_ELEMENT_CLASS_" + (this.before ? "BEFORE" : "AFTER")]
        }
        ,
        n.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = "___html2canvas___pseudoelement_before",
        n.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER = "___html2canvas___pseudoelement_after",
        t.exports = n
    }
      , {
      "./nodecontainer": 14
    }],
    19: [function (e, t, r) {
      var o = e("./log");
      function n(s, i, u, a, c) {
        this.width = s,
          this.height = i,
          this.images = u,
          this.options = a,
          this.document = c
      }
      n.prototype.renderImage = function (s, i, u, a) {
        var c = s.cssInt("paddingLeft")
          , d = s.cssInt("paddingTop")
          , g = s.cssInt("paddingRight")
          , F = s.cssInt("paddingBottom")
          , E = u.borders
          , h = i.width - (E[1].width + E[3].width + c + g)
          , p = i.height - (E[0].width + E[2].width + d + F);
        this.drawImage(a, 0, 0, a.image.width || h, a.image.height || p, i.left + c + E[3].width, i.top + d + E[0].width, h, p)
      }
        ,
        n.prototype.renderBackground = function (s, i, u) {
          i.height > 0 && i.width > 0 && (this.renderBackgroundColor(s, i),
            this.renderBackgroundImage(s, i, u))
        }
        ,
        n.prototype.renderBackgroundColor = function (s, i) {
          var u = s.color("backgroundColor");
          u.isTransparent() || this.rectangle(i.left, i.top, i.width, i.height, u)
        }
        ,
        n.prototype.renderBorders = function (s) {
          s.forEach(this.renderBorder, this)
        }
        ,
        n.prototype.renderBorder = function (s) {
          !s.color.isTransparent() && s.args !== null && this.drawShape(s.args, s.color)
        }
        ,
        n.prototype.renderBackgroundImage = function (s, i, u) {
          var a = s.parseBackgroundImages();
          a.reverse().forEach(function (c, d, g) {
            switch (c.method) {
              case "url":
                var F = this.images.get(c.args[0]);
                F ? this.renderBackgroundRepeating(s, i, F, g.length - (d + 1), u) : o("Error loading background-image", c.args[0]);
                break;
              case "linear-gradient":
              case "gradient":
                var E = this.images.get(c.value);
                E ? this.renderBackgroundGradient(E, i, u) : o("Error loading background-image", c.args[0]);
                break;
              case "none":
                break;
              default:
                o("Unknown background-image type", c.args[0])
            }
          }, this)
        }
        ,
        n.prototype.renderBackgroundRepeating = function (s, i, u, a, c) {
          var d = s.parseBackgroundSize(i, u.image, a)
            , g = s.parseBackgroundPosition(i, u.image, a, d)
            , F = s.parseBackgroundRepeat(a);
          switch (F) {
            case "repeat-x":
            case "repeat no-repeat":
              this.backgroundRepeatShape(u, g, d, i, i.left + c[3], i.top + g.top + c[0], 99999, d.height, c);
              break;
            case "repeat-y":
            case "no-repeat repeat":
              this.backgroundRepeatShape(u, g, d, i, i.left + g.left + c[3], i.top + c[0], d.width, 99999, c);
              break;
            case "no-repeat":
              this.backgroundRepeatShape(u, g, d, i, i.left + g.left + c[3], i.top + g.top + c[0], d.width, d.height, c);
              break;
            default:
              this.renderBackgroundRepeat(u, g, d, {
                top: i.top,
                left: i.left
              }, c[3], c[0]);
              break
          }
        }
        ,
        t.exports = n
    }
      , {
      "./log": 13
    }],
    20: [function (e, t, r) {
      var o = e("../renderer")
        , n = e("../lineargradientcontainer")
        , s = e("../log");
      function i(a, c) {
        o.apply(this, arguments),
          this.canvas = this.options.canvas || this.document.createElement("canvas"),
          this.options.canvas || (this.canvas.width = a,
            this.canvas.height = c),
          this.ctx = this.canvas.getContext("2d"),
          this.taintCtx = this.document.createElement("canvas").getContext("2d"),
          this.ctx.textBaseline = "bottom",
          this.variables = {},
          s("Initialized CanvasRenderer with size", a, "x", c)
      }
      i.prototype = Object.create(o.prototype),
        i.prototype.setFillStyle = function (a) {
          return this.ctx.fillStyle = typeof a == "object" && !!a.isColor ? a.toString() : a,
            this.ctx
        }
        ,
        i.prototype.rectangle = function (a, c, d, g, F) {
          this.setFillStyle(F).fillRect(a, c, d, g)
        }
        ,
        i.prototype.circle = function (a, c, d, g) {
          this.setFillStyle(g),
            this.ctx.beginPath(),
            this.ctx.arc(a + d / 2, c + d / 2, d / 2, 0, Math.PI * 2, !0),
            this.ctx.closePath(),
            this.ctx.fill()
        }
        ,
        i.prototype.circleStroke = function (a, c, d, g, F, E) {
          this.circle(a, c, d, g),
            this.ctx.strokeStyle = E.toString(),
            this.ctx.stroke()
        }
        ,
        i.prototype.drawShape = function (a, c) {
          this.shape(a),
            this.setFillStyle(c).fill()
        }
        ,
        i.prototype.taints = function (a) {
          if (a.tainted === null) {
            this.taintCtx.drawImage(a.image, 0, 0);
            try {
              this.taintCtx.getImageData(0, 0, 1, 1),
                a.tainted = !1
            } catch {
              this.taintCtx = document.createElement("canvas").getContext("2d"),
                a.tainted = !0
            }
          }
          return a.tainted
        }
        ,
        i.prototype.drawImage = function (a, c, d, g, F, E, h, p, m) {
          (!this.taints(a) || this.options.allowTaint) && this.ctx.drawImage(a.image, c, d, g, F, E, h, p, m)
        }
        ,
        i.prototype.clip = function (a, c, d) {
          this.ctx.save(),
            a.filter(u).forEach(function (g) {
              this.shape(g).clip()
            }, this),
            c.call(d),
            this.ctx.restore()
        }
        ,
        i.prototype.shape = function (a) {
          return this.ctx.beginPath(),
            a.forEach(function (c, d) {
              c[0] === "rect" ? this.ctx.rect.apply(this.ctx, c.slice(1)) : this.ctx[d === 0 ? "moveTo" : c[0] + "To"].apply(this.ctx, c.slice(1))
            }, this),
            this.ctx.closePath(),
            this.ctx
        }
        ,
        i.prototype.font = function (a, c, d, g, F, E) {
          this.setFillStyle(a).font = [c, d, g, F, E].join(" ").split(",")[0]
        }
        ,
        i.prototype.fontShadow = function (a, c, d, g) {
          this.ctx.shadowOffsetX = c,
            this.ctx.shadowOffsetY = d,
            this.ctx.shadowColor = a,
            this.ctx.shadowBlur = g
        }
        ,
        i.prototype.clearShadow = function () {
          this.ctx.shadowOffsetX = 0,
            this.ctx.shadowOffsetY = 0,
            this.ctx.shadowBlur = 0
        }
        ,
        i.prototype.clearShadow = function () {
          this.setVariable("shadowColor", "rgba(0,0,0,0)")
        }
        ,
        i.prototype.setOpacity = function (a) {
          this.ctx.globalAlpha = a
        }
        ,
        i.prototype.setTransform = function (a) {
          this.ctx.translate(a.origin[0], a.origin[1]),
            this.ctx.transform.apply(this.ctx, a.matrix),
            this.ctx.translate(-a.origin[0], -a.origin[1])
        }
        ,
        i.prototype.setVariable = function (a, c) {
          return this.variables[a] !== c && (this.variables[a] = this.ctx[a] = c),
            this
        }
        ,
        i.prototype.text = function (a, c, d) {
          this.ctx.fillText(a, c, d)
        }
        ,
        i.prototype.backgroundRepeatShape = function (a, c, d, g, F, E, h, p, m) {
          var v = [["line", Math.round(F), Math.round(E)], ["line", Math.round(F + h), Math.round(E)], ["line", Math.round(F + h), Math.round(p + E)], ["line", Math.round(F), Math.round(p + E)]];
          this.clip([v], function () {
            this.renderBackgroundRepeat(a, c, d, g, m[3], m[0])
          }, this)
        }
        ,
        i.prototype.renderBackgroundRepeat = function (a, c, d, g, F, E) {
          var h = Math.round(g.left + c.left + F)
            , p = Math.round(g.top + c.top + E);
          this.setFillStyle(this.ctx.createPattern(this.resizeImage(a, d), "repeat")),
            this.ctx.translate(h, p),
            this.ctx.fill(),
            this.ctx.translate(-h, -p)
        }
        ,
        i.prototype.renderBackgroundGradient = function (a, c) {
          if (a instanceof n) {
            var d = this.ctx.createLinearGradient(c.left + c.width * a.x0, c.top + c.height * a.y0, c.left + c.width * a.x1, c.top + c.height * a.y1);
            a.colorStops.forEach(function (g) {
              d.addColorStop(g.stop, g.color.toString())
            }),
              this.rectangle(c.left, c.top, c.width, c.height, d)
          }
        }
        ,
        i.prototype.resizeImage = function (a, c) {
          var d = a.image;
          if (d.width === c.width && d.height === c.height)
            return d;
          var g, F = document.createElement("canvas");
          return F.width = c.width,
            F.height = c.height,
            g = F.getContext("2d"),
            g.drawImage(d, 0, 0, d.width, d.height, 0, 0, c.width, c.height),
            F
        }
        ;
      function u(a) {
        return a.length > 0
      }
      t.exports = i
    }
      , {
      "../lineargradientcontainer": 12,
      "../log": 13,
      "../renderer": 19
    }],
    21: [function (e, t, r) {
      var o = e("./nodecontainer");
      function n(s, i, u, a) {
        o.call(this, u, a),
          this.ownStacking = s,
          this.contexts = [],
          this.children = [],
          this.opacity = (this.parent ? this.parent.stack.opacity : 1) * i
      }
      n.prototype = Object.create(o.prototype),
        n.prototype.getParentStack = function (s) {
          var i = this.parent ? this.parent.stack : null;
          return i ? i.ownStacking ? i : i.getParentStack(s) : s.stack
        }
        ,
        t.exports = n
    }
      , {
      "./nodecontainer": 14
    }],
    22: [function (e, t, r) {
      function o(n) {
        this.rangeBounds = this.testRangeBounds(n),
          this.cors = this.testCORS(),
          this.svg = this.testSVG()
      }
      o.prototype.testRangeBounds = function (n) {
        var s, i, u, a, c = !1;
        return n.createRange && (s = n.createRange(),
          s.getBoundingClientRect && (i = n.createElement("boundtest"),
            i.style.height = "123px",
            i.style.display = "block",
            n.body.appendChild(i),
            s.selectNode(i),
            u = s.getBoundingClientRect(),
            a = u.height,
            a === 123 && (c = !0),
            n.body.removeChild(i))),
          c
      }
        ,
        o.prototype.testCORS = function () {
          return typeof new Image().crossOrigin != "undefined"
        }
        ,
        o.prototype.testSVG = function () {
          var n = new Image
            , s = document.createElement("canvas")
            , i = s.getContext("2d");
          n.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
          try {
            i.drawImage(n, 0, 0),
              s.toDataURL()
          } catch {
            return !1
          }
          return !0
        }
        ,
        t.exports = o
    }
      , {}],
    23: [function (e, t, r) {
      var o = e("./xhr")
        , n = e("./utils").decode64;
      function s(i) {
        this.src = i,
          this.image = null;
        var u = this;
        this.promise = this.hasFabric().then(function () {
          return u.isInline(i) ? Promise.resolve(u.inlineFormatting(i)) : o(i)
        }).then(function (a) {
          return new Promise(function (c) {
            window.html2canvas.svg.fabric.loadSVGFromString(a, u.createCanvas.call(u, c))
          }
          )
        })
      }
      s.prototype.hasFabric = function () {
        return !window.html2canvas.svg || !window.html2canvas.svg.fabric ? Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg")) : Promise.resolve()
      }
        ,
        s.prototype.inlineFormatting = function (i) {
          return /^data:image\/svg\+xml;base64,/.test(i) ? this.decode64(this.removeContentType(i)) : this.removeContentType(i)
        }
        ,
        s.prototype.removeContentType = function (i) {
          return i.replace(/^data:image\/svg\+xml(;base64)?,/, "")
        }
        ,
        s.prototype.isInline = function (i) {
          return /^data:image\/svg\+xml/i.test(i)
        }
        ,
        s.prototype.createCanvas = function (i) {
          var u = this;
          return function (a, c) {
            var d = new window.html2canvas.svg.fabric.StaticCanvas("c");
            u.image = d.lowerCanvasEl,
              d.setWidth(c.width).setHeight(c.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(a, c)).renderAll(),
              i(d.lowerCanvasEl)
          }
        }
        ,
        s.prototype.decode64 = function (i) {
          return typeof window.atob == "function" ? window.atob(i) : n(i)
        }
        ,
        t.exports = s
    }
      , {
      "./utils": 26,
      "./xhr": 28
    }],
    24: [function (e, t, r) {
      var o = e("./svgcontainer");
      function n(s, i) {
        this.src = s,
          this.image = null;
        var u = this;
        this.promise = i ? new Promise(function (a, c) {
          u.image = new Image,
            u.image.onload = a,
            u.image.onerror = c,
            u.image.src = "data:image/svg+xml," + new XMLSerializer().serializeToString(s),
            u.image.complete === !0 && a(u.image)
        }
        ) : this.hasFabric().then(function () {
          return new Promise(function (a) {
            window.html2canvas.svg.fabric.parseSVGDocument(s, u.createCanvas.call(u, a))
          }
          )
        })
      }
      n.prototype = Object.create(o.prototype),
        t.exports = n
    }
      , {
      "./svgcontainer": 23
    }],
    25: [function (e, t, r) {
      var o = e("./nodecontainer");
      function n(i, u) {
        o.call(this, i, u)
      }
      n.prototype = Object.create(o.prototype),
        n.prototype.applyTextTransform = function () {
          this.node.data = this.transform(this.parent.css("textTransform"))
        }
        ,
        n.prototype.transform = function (i) {
          var u = this.node.data;
          switch (i) {
            case "lowercase":
              return u.toLowerCase();
            case "capitalize":
              return u.replace(/(^|\s|:|-|\(|\))([a-z])/g, s);
            case "uppercase":
              return u.toUpperCase();
            default:
              return u
          }
        }
        ;
      function s(i, u, a) {
        if (i.length > 0)
          return u + a.toUpperCase()
      }
      t.exports = n
    }
      , {
      "./nodecontainer": 14
    }],
    26: [function (e, t, r) {
      r.smallImage = function () {
        return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      }
        ,
        r.bind = function (o, n) {
          return function () {
            return o.apply(n, arguments)
          }
        }
        ,
        r.decode64 = function (o) {
          var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = o.length, i, u, a, c, d, g, F, E, h = "";
          for (i = 0; i < s; i += 4)
            u = n.indexOf(o[i]),
              a = n.indexOf(o[i + 1]),
              c = n.indexOf(o[i + 2]),
              d = n.indexOf(o[i + 3]),
              g = u << 2 | a >> 4,
              F = (a & 15) << 4 | c >> 2,
              E = (c & 3) << 6 | d,
              c === 64 ? h += String.fromCharCode(g) : d === 64 || d === -1 ? h += String.fromCharCode(g, F) : h += String.fromCharCode(g, F, E);
          return h
        }
        ,
        r.getBounds = function (o) {
          if (o.getBoundingClientRect) {
            var n = o.getBoundingClientRect()
              , s = o.offsetWidth == null ? n.width : o.offsetWidth;
            return {
              top: n.top,
              bottom: n.bottom || n.top + n.height,
              right: n.left + s,
              left: n.left,
              width: s,
              height: o.offsetHeight == null ? n.height : o.offsetHeight
            }
          }
          return {}
        }
        ,
        r.offsetBounds = function (o) {
          var n = o.offsetParent ? r.offsetBounds(o.offsetParent) : {
            top: 0,
            left: 0
          };
          return {
            top: o.offsetTop + n.top,
            bottom: o.offsetTop + o.offsetHeight + n.top,
            right: o.offsetLeft + n.left + o.offsetWidth,
            left: o.offsetLeft + n.left,
            width: o.offsetWidth,
            height: o.offsetHeight
          }
        }
        ,
        r.parseBackgrounds = function (o) {
          var n = ` \r
	`, s, i, u, a, c, d = [], g = 0, F = 0, E, h, p = function () {
              s && (i.substr(0, 1) === '"' && (i = i.substr(1, i.length - 2)),
                i && h.push(i),
                s.substr(0, 1) === "-" && (a = s.indexOf("-", 1) + 1) > 0 && (u = s.substr(0, a),
                  s = s.substr(a)),
                d.push({
                  prefix: u,
                  method: s.toLowerCase(),
                  value: c,
                  args: h,
                  image: null
                })),
                h = [],
                s = u = i = c = ""
            };
          return h = [],
            s = u = i = c = "",
            o.split("").forEach(function (m) {
              if (!(g === 0 && n.indexOf(m) > -1)) {
                switch (m) {
                  case '"':
                    E ? E === m && (E = null) : E = m;
                    break;
                  case "(":
                    if (E)
                      break;
                    if (g === 0) {
                      g = 1,
                        c += m;
                      return
                    } else
                      F++;
                    break;
                  case ")":
                    if (E)
                      break;
                    if (g === 1)
                      if (F === 0) {
                        g = 0,
                          c += m,
                          p();
                        return
                      } else
                        F--;
                    break;
                  case ",":
                    if (E)
                      break;
                    if (g === 0) {
                      p();
                      return
                    } else if (g === 1 && F === 0 && !s.match(/^url$/i)) {
                      h.push(i),
                        i = "",
                        c += m;
                      return
                    }
                    break
                }
                c += m,
                  g === 0 ? s += m : i += m
              }
            }),
            p(),
            d
        }
    }
      , {}],
    27: [function (e, t, r) {
      var o = e("./gradientcontainer");
      function n(s) {
        o.apply(this, arguments),
          this.type = s.args[0] === "linear" ? o.TYPES.LINEAR : o.TYPES.RADIAL
      }
      n.prototype = Object.create(o.prototype),
        t.exports = n
    }
      , {
      "./gradientcontainer": 9
    }],
    28: [function (e, t, r) {
      function o(n) {
        return new Promise(function (s, i) {
          var u = new XMLHttpRequest;
          u.open("GET", n),
            u.onload = function () {
              u.status === 200 ? s(u.responseText) : i(new Error(u.statusText))
            }
            ,
            u.onerror = function () {
              i(new Error("Network Error"))
            }
            ,
            u.send()
        }
        )
      }
      t.exports = o
    }
      , {}]
  }, {}, [4])(4)
});
const Ua = {
  key: 0,
  class: "pop pop-answer on"
}
  , ja = {
    key: 0,
    class: "canvasbox"
  }
  , Ha = {
    class: "answer-box",
    id: "htmlBox"
  }
  , qa = {
    class: "bg"
  }
  , za = {
    class: "shareInfo"
  }
  , Va = {
    key: 0,
    class: "word"
  }
  , Wa = {
    key: 1,
    class: "word"
  }
  , Ga = {
    class: "bot"
  }
  , Ja = f("div", {
    class: "txt"
  }, [f("p", {
    class: "p1"
  }, "\u9634\u9633\u5E08\u5468\u8FB9\u5C4B\u79D8\u5B9D\u306E\u731C\u8C1C\u793E\u6D3B\u52A8"), f("p", {
    class: "p2"
  }, "\u8FDB\u5165\u9634\u9633\u5E08\u6E38\u620F\u5185\u5468\u8FB9\u5C4B\uFF0C\u53C2\u4E0E \u731C\u8C1C\u3001\u7B7E\u5230\u4E92\u52A8\uFF0C\u9886\u53D6\u6D77\u91CF\u5468\u8FB9\u60CA\u559C\u54E6")], -1)
  , Ya = {
    class: "qrcode"
  }
  , Qa = {
    class: "img"
  }
  , Xa = ["src"]
  , Ka = f("p", {
    class: "ts"
  }, "(\u957F\u6309\u8BC6\u522B\u4E0A\u65B9\u4E8C\u7EF4\u7801)", -1)
  , Za = {
    class: "bg"
  }
  , tu = {
    key: 0,
    class: "shareInfo"
  }
  , eu = {
    key: 0,
    class: "word"
  }
  , nu = {
    key: 1,
    class: "word"
  }
  , ru = {
    class: "bot"
  }
  , su = f("div", {
    class: "txt"
  }, [f("p", {
    class: "p1"
  }, "\u9634\u9633\u5E08\u5468\u8FB9\u5C4B\u79D8\u5B9D\u306E\u731C\u8C1C\u793E\u6D3B\u52A8"), f("p", {
    class: "p2"
  }, "\u8FDB\u5165\u9634\u9633\u5E08\u6E38\u620F\u5185\u5468\u8FB9\u5C4B\uFF0C\u53C2\u4E0E \u731C\u8C1C\u3001\u7B7E\u5230\u4E92\u52A8\uFF0C\u9886\u53D6\u6D77\u91CF\u5468\u8FB9\u60CA\u559C\u54E6")], -1)
  , ou = {
    class: "qrcode"
  }
  , iu = {
    class: "img"
  }
  , au = ["src"]
  , uu = f("p", {
    class: "ts"
  }, "(\u957F\u6309\u8BC6\u522B\u4E0A\u65B9\u4E8C\u7EF4\u7801)", -1)
  , lu = {
    key: 2,
    class: "other"
  }
  , cu = {
    key: 0
  }
  , du = {
    key: 1
  }
  , hu = {
    key: 1,
    class: "sharebtns"
  }
  , fu = {
    key: 1,
    class: "pctxt"
  }
  , pu = ne(" \u7535\u8111\u7AEF\u7528\u6237\u6682\u65E0\u6CD5\u5206\u4EAB\u6D77\u62A5\u56FE\u7247 ")
  , gu = f("br", null, null, -1)
  , mu = ne(" \u8BF7\u7528\u624B\u673A\u8FDB\u5165\u6E38\u620F\u53C2\u4E0E\u6D3B\u52A8\u54E6\uFF5E ")
  , vu = [pu, gu, mu]
  , yu = ft({
    props: ["showType"],
    emits: ["changeType", "share"],
    setup(e, { emit: t }) {
      const r = kt()
        , o = K(null)
        , n = At({
          curIndex: 0,
          answer: "",
          totayAnswer: !1,
          todayOk: !1,
          isShowShare: !1
        })
        , s = Ht(() => {
          let v = r.state.quesList[n.curIndex];
          return v.answerChoice ? v.correctChoice == v.answerChoice : 0
        }
        )
        , i = () => {
          n.isShowShare = !1,
            n.answer = "",
            t("changeType", 0),
            $("html, body").removeClass("ov")
        }
        , u = () => {
          n.curIndex = r.state.curQuesIndex;
          let v = r.state.quesList[r.state.curQuesIndex];
          n.totayAnswer = !!v.answerChoice,
            n.todayOk = v.correctChoice == v.answerChoice
        }
        , a = v => {
          n.answer = v
        }
        , c = v => {
          o.value.submitAnswer()
        }
        , d = v => {
          o.value.changeQus(v),
            n.curIndex = o.value.state.i
        }
        , g = () => {
          if (!r.state.isMobile) {
            t("share", !0);
            return
          }
          n.isShowShare = !0,
            E()
        }
        , F = K("")
        , E = () => {
          let v = r.state.quesList[n.curIndex].shortUrl;
          oe.toDataURL(v).then(_ => {
            F.value = _
          }
          ).catch(_ => {
            console.error(_)
          }
          )
        }
        , h = v => {
          m(v)
        }
        ;
      function p(v) {
        for (var _ = v.split(","), y = _[0].match(/:(.*?);/)[1], B = atob(_[1]), S = B.length, R = new Uint8Array(S); S--;)
          R[S] = B.charCodeAt(S);
        return new Blob([R], {
          type: y
        })
      }
      const m = v => {
        let _ = document.getElementById("htmlBox");
        Ye(() => {
          $("htmlBox").width(),
            $("htmlBox").height(),
            html2canvas(_, {
              width: 1057 / 1.5,
              height: 1570 / 1.5,
              logging: !1,
              useCORS: !0,
              backgroundColor: null
            }).then(y => {
              let B = y.toDataURL("image/jpeg", .9);
              Ut("\u9634\u9633\u5E086\u6708\u5FEB\u95EA\u731C\u8C1C-\u5206\u4EAB\u731C\u8C1C\u6D77\u62A5-Q" + r.state.quesList[n.curIndex].questionId);
              let S = p(B);
              xt.allApi.uploadApi(S, "image/jpeg").then(R => {
                R.code === 0 ? (console.log(R.result),
                  v == 1 ? location.href = "yysp://share/realmall/pyqimg/?img=" + R.result : location.href = "yysp://share/realmall/weixinimg/?img=" + R.result) : console.log(R)
              }
              )
            }
            )
        }
        )
      }
        ;
      return ee(() => { }
      ),
        (v, _) => e.showType == 1 ? (T(),
          I("div", Ua, [x(n).isShowShare ? (T(),
            I("div", ja, [f("div", Ha, [f("div", qa, [Ct(Ze, {
              ref_key: "popShareRef",
              ref: o,
              isHome: 0,
              cur: x(n).curIndex
            }, null, 8, ["cur"])]), f("div", za, [x(s) !== 0 ? (T(),
              I(nt, {
                key: 0
              }, [x(s) ? (T(),
                I("p", Va, q(x(r).state.nickName) + "\uFF1A\u7B54\u5BF9\u4E86\uFF01\u4E0D\u6127 \u662F\u6211\uFF01\u4F60\u4E5F\u6765\u6311\u6218\u5427 ", 1)) : (T(),
                  I("p", Wa, q(x(r).state.nickName) + "\uFF1A\u5FEB\u5E2E\u6211\u770B\u770B\uFF0C\u8FD9\u9053\u9898\u6211\u731C\u4E0D\u51FA\u6765.. ", 1))], 64)) : z("", !0), f("div", Ga, [Ja, f("div", Ya, [f("div", Qa, [f("img", {
                    src: F.value,
                    alt: "qr"
                  }, null, 8, Xa)]), Ka])])])])])) : z("", !0), f("div", {
                    class: "mask",
                    onClick: i
                  }), f("div", {
                    class: rt(["answer-view pop-content", {
                      bg: x(n).isShowShare
                    }]),
                    onClick: i
                  }, [x(n).isShowShare ? (T(),
                    I("a", {
                      key: 0,
                      href: "javascript:;",
                      class: "close-pop close-answer2",
                      title: "close",
                      onClick: i
                    })) : z("", !0), f("div", {
                      class: "answer-box",
                      onClick: _[2] || (_[2] = ge(() => { }
                        , ["stop"]))
                    }, [f("div", Za, [Ct(Ze, {
                      ref_key: "popShareRef",
                      ref: o,
                      isHome: 0,
                      onChooseItem: a,
                      onSendData: u
                    }, null, 512)]), x(n).isShowShare ? (T(),
                      I("div", tu, [x(s) !== 0 ? (T(),
                        I(nt, {
                          key: 0
                        }, [x(s) ? (T(),
                          I("p", eu, q(x(r).state.nickName) + "\uFF1A\u7B54\u5BF9\u4E86\uFF01\u4E0D\u6127 \u662F\u6211\uFF01\u4F60\u4E5F\u6765\u6311\u6218\u5427 ", 1)) : (T(),
                            I("p", nu, q(x(r).state.nickName) + "\uFF1A\u5FEB\u5E2E\u6211\u770B\u770B\uFF0C\u8FD9\u9053\u9898\u6211\u731C\u4E0D\u51FA\u6765.. ", 1))], 64)) : z("", !0), f("div", ru, [su, f("div", ou, [f("div", iu, [f("img", {
                              src: F.value,
                              alt: "qr"
                            }, null, 8, au)]), uu])])])) : (T(),
                              I(nt, {
                                key: 1
                              }, [x(n).totayAnswer ? (T(),
                                I("a", {
                                  key: 0,
                                  href: "javascript:;",
                                  class: "arrbtn prev-btn",
                                  onClick: _[0] || (_[0] = y => d(0))
                                })) : z("", !0), x(n).totayAnswer ? (T(),
                                  I("a", {
                                    key: 1,
                                    href: "javascript:;",
                                    class: "arrbtn next-btn",
                                    onClick: _[1] || (_[1] = y => d(1))
                                  })) : z("", !0), x(r).state.quesList.length ? (T(),
                                    I("div", lu, [f("div", {
                                      class: rt(["comcss btns", {
                                        on: !x(n).totayAnswer
                                      }])
                                    }, [f("a", {
                                      href: "javascript:;",
                                      class: rt(["hd-btn", {
                                        gary: !x(n).answer
                                      }]),
                                      onClick: c
                                    }, null, 2)], 2), f("div", {
                                      class: rt(["comcss resbox", {
                                        on: x(n).totayAnswer && x(s) !== 0
                                      }])
                                    }, [x(s) ? (T(),
                                      I("p", cu, "\u606D\u559C\u5927\u4EBA\u7B54\u5BF9\u5566\uFF5E\u79D8\u5B9D\u5DF2\u4E3A\u60A8\u5949\u4E0A5\u5B9D\u888B\uFF5E")) : (T(),
                                        I("p", du, "\u8BF6\u5440 \u5927\u4EBA\u6CA1\u7B54\u5BF9\u5462\uFF0C\u6CA1\u5173\u7CFB\uFF0C\u660E\u5929\u8BB0\u5F97\u518D\u6765\u54E6")), f("div", {
                                          class: "btns"
                                        }, [f("a", {
                                          href: "javascript:;",
                                          class: "gb-btn",
                                          onClick: i
                                        }), f("a", {
                                          href: "javascript:;",
                                          class: "share-btn",
                                          onClick: g
                                        })])], 2)])) : z("", !0)], 64))]), x(n).isShowShare ? (T(),
                                          I("div", hu, [x(r).state.isMobile ? (T(),
                                            I(nt, {
                                              key: 0
                                            }, [f("a", {
                                              href: "javascript:;",
                                              class: "shareway pyq-btn",
                                              onClick: _[3] || (_[3] = ge(y => h(1), ["stop"]))
                                            }), f("a", {
                                              href: "javascript:;",
                                              class: "shareway wx-btn",
                                              onClick: _[4] || (_[4] = ge(y => h(2), ["stop"]))
                                            })], 64)) : (T(),
                                              I("p", fu, vu))])) : (T(),
                                                I("a", {
                                                  key: 2,
                                                  href: "javascript:;",
                                                  class: "close-pop close-answer",
                                                  title: "close",
                                                  onClick: i
                                                }))], 2)])) : z("", !0)
    }
  });
var wu = "/html/yys20220601/assets/pop-attend-paperman.46023fdf.png";
const Eu = e => (_e("data-v-6ee47126"),
  e = e(),
  Fe(),
  e)
  , Cu = {
    key: 0,
    class: "modal"
  }
  , _u = {
    class: "calendar-warpper"
  }
  , Fu = {
    class: "calendar"
  }
  , Bu = {
    class: "animation-show"
  }
  , xu = {
    key: 0,
    class: "hint"
  }
  , bu = {
    class: "hint-dialog"
  }
  , Au = Eu(() => f("img", {
    src: wu,
    class: "hint-paperman"
  }, null, -1))
  , ku = {
    class: "desc"
  }
  , Tu = ft({
    props: ["attendRecord", "todayDate", "firstDate"],
    setup(e, { expose: t }) {
      const r = e
        , o = K(!1)
        , n = Ht(() => r.attendRecord ? r.attendRecord.split("").map(c => parseInt(c)).reduce((c, d) => c + d) : 0)
        , s = Ht(() => {
          let c = "";
          return n.value >= 7 && n.value < 10 ? c = `\u7B7E\u5230\u6EE110\u5929\u540E\uFF0C\u79D8\u5B9D\u8FD8\u4F1A\u989D\u5916\u8D60\u900110\u4E2A\u5B9D\u888B\uFF0C\u60A8\u53EA\u9700\u7EE7\u7EED\u7B7E\u5230${10 - n.value}\u5929\u5C31\u53EF\u83B7\u5F97\u4E86\uFF5E` : n.value == 10 && (c = "\u606D\u559C\u4F60\u5DF2\u7ECF\u6210\u529F\u7B7E\u5230\u6EE110\u5929\uFF0C\u79D8\u5B9D\u989D\u5916\u8D60\u9001\u4E8610\u4E2A\u5B9D\u888B\u7ED9\u5927\u4EBA\u54E6\uFF5E"),
            c
        }
        )
        , i = At({
          tips: "\u7B7E\u5230\u6210\u529F\uFF5E"
        });
      async function u() {
        const c = await xt.allApi.attendance().catch(d => console.log);
        return c.result.resultCode === 0 ? (Ut("\u9634\u9633\u5E086\u6708\u5FEB\u95EA\u731C\u8C1C-\u7B7E\u5230\u6210\u529F"),
          o.value = !0,
          $("html, body").addClass("ov"),
          i.tips = c.result.tips || "\u7B7E\u5230\u6210\u529F\uFF5E",
          ke(),
          c.result.attendanceInfo.values) : !1
      }
      function a() {
        $("html, body").removeClass("ov"),
          o.value = !1
      }
      return t({
        openAttendPop: u
      }),
        (c, d) => o.value ? (T(),
          I("div", Cu, [f("div", {
            class: "modal-mask",
            onClick: a
          }), f("div", {
            class: rt(["modal-short", {
              "modal-long": x(s)
            }])
          }, [f("div", _u, [f("div", Fu, [(T(),
            I(nt, null, Lt(21, g => f("div", {
              class: rt(["calendar-item", {
                done: r.attendRecord[g + 5 - r.firstDate] == "1",
                today: r.todayDate == g + 5
              }])
            }, q(g + 5), 3)), 64))])]), f("div", Bu, [x(s) ? (T(),
              I("div", xu, [f("div", bu, q(x(s)), 1), Au])) : z("", !0), f("p", ku, q(x(i).tips), 1), f("a", {
                href: "javascript:;",
                class: "btn-yes",
                onClick: a
              })]), f("i", {
                class: "modal-close",
                onClick: a
              })], 2)])) : z("", !0)
    }
  });
var Su = se(Tu, [["__scopeId", "data-v-6ee47126"]]);
const Iu = {
  key: 0,
  class: "modal"
}
  , Du = {
    class: "modal-hint"
  }
  , Ru = {
    class: "hint-text"
  }
  , Lu = ft({
    props: {
      hint: String
    },
    setup(e, { expose: t }) {
      const r = e
        , o = K(!1);
      function n() {
        o.value = !1,
          $("html, body").removeClass("ov")
      }
      async function s() {
        o.value = !0,
          $("html, body").addClass("ov")
      }
      return t({
        showPop: s
      }),
        (i, u) => o.value ? (T(),
          I("div", Iu, [f("div", {
            class: "modal-mask",
            onClick: n
          }), f("div", Du, [f("div", Ru, q(r.hint), 1), f("i", {
            class: "modal-close",
            onClick: n
          })])])) : z("", !0)
    }
  });
var $u = se(Lu, [["__scopeId", "data-v-55aa2b0a"]]);
const Pu = {
  class: "part-2"
}
  , Nu = f("h2", {
    class: "tit"
  }, null, -1)
  , Mu = f("div", {
    class: "tit2"
  }, [f("div", {
    class: "paperMan"
  }), f("div", {
    class: "dialog"
  })], -1)
  , Ou = {
    class: "contbox"
  }
  , Uu = {
    class: "inner inner1"
  }
  , ju = f("h3", {
    class: "title"
  }, [f("span", {
    class: "task-desc"
  }, "\u731C\u8C1C\u5F975\u5B9D\u888B")], -1)
  , Hu = {
    key: 0,
    class: "con"
  }
  , qu = on('<div class="img"><img src="' + ir + '"></div><div class="bot-info"><p class="jqqd jqqd1"></p><div class="paperman"></div></div>', 2)
  , zu = [qu]
  , Vu = {
    key: 1,
    class: "con"
  }
  , Wu = on('<div class="img"><img src="' + ir + '"></div><div class="bot-info"><p class="jqqd jqqd2"></p><div class="paperman"></div></div>', 2)
  , Gu = [Wu]
  , Ju = {
    class: "inner inner2"
  }
  , Yu = f("h3", {
    class: "title"
  }, [f("span", {
    class: "task-desc"
  }, "\u7B7E\u5230\u5F971\u5B9D\u888B")], -1)
  , Qu = {
    class: "cont"
  }
  , Xu = {
    key: 0
  }
  , Ku = f("img", {
    src: Mi,
    class: "shadow"
  }, null, -1)
  , Zu = f("img", {
    src: Oi,
    class: "ring"
  }, null, -1)
  , tl = [Ku, Zu]
  , el = {
    key: 1,
    class: "calendar-warpper"
  }
  , nl = {
    class: "calendar"
  }
  , rl = {
    key: 0,
    class: "text"
  }
  , sl = {
    key: 1,
    class: "text"
  }
  , ol = {
    key: 2,
    class: "text"
  }
  , il = {
    class: "paperman-warpper"
  }
  , al = {
    class: "inner inner3"
  }
  , ul = f("h3", {
    class: "title"
  }, [f("span", {
    class: "task-desc"
  }, "\u5206\u4EAB\u5F972\u5B9D\u888B")], -1)
  , ll = {
    class: "cont"
  }
  , cl = f("img", {
    src: ji,
    class: "shadow"
  }, null, -1)
  , dl = f("img", {
    src: Hi,
    class: "ring"
  }, null, -1)
  , hl = {
    class: "share"
  }
  , fl = {
    key: 0,
    class: "p1"
  }
  , pl = {
    key: 1,
    class: "p2"
  }
  , gl = {
    key: 0,
    class: "text"
  }
  , ml = {
    key: 1,
    class: "text"
  }
  , vl = {
    class: "inner inner4"
  }
  , yl = f("h3", {
    class: "title"
  }, [f("span", {
    class: "task-desc"
  }, "\u6D88\u8D39\u5F9720\u5B9D\u888B")], -1)
  , wl = {
    class: "cont"
  }
  , El = ne("\u5468\u8FB9\u5C4B\u5185\u6D88\u8D39\u6EE1200\u5143\u53EF\u83B7\u5F9720\u5B9D\u888B")
  , Cl = f("div", {
    class: "paperMan"
  }, null, -1)
  , _l = f("div", {
    class: "dialog"
  }, null, -1)
  , Fl = [Cl, _l]
  , Bl = {
    class: "process"
  }
  , xl = {
    class: "line"
  }
  , bl = f("i", {
    class: "icon"
  }, null, -1)
  , Al = [bl]
  , kl = {
    class: "num"
  }
  , Tl = {
    class: "cur"
  }
  , Sl = {
    class: "all"
  }
  , Il = {
    key: 0,
    class: "tips"
  }
  , Dl = ft({
    props: ["cur", "total", "isShared", "attendanceInfo", "isExpired", "maxLimit"],
    emits: ["share", "refresh", "updateAttend"],
    setup(e, { emit: t }) {
      const r = e
        , o = kt()
        , n = At({
          isAttended: !1,
          answerPopType: 0,
          totayAnswer: !1,
          attendRecord: "1100000",
          neverAttend: !1,
          firstDate: 1,
          todayDate: 1,
          isQuestionStart: !1,
          processWidth: {
            width: "0%"
          }
        });
      function s() {
        const m = r.cur / r.total * 100;
        let v = "";
        m >= 95 && m < 100 ? v = "95%" : m <= 5 && m > 0 ? v = "5%" : v = m + "%",
          n.processWidth.width = v
      }
      Hn(() => {
        let m = r.attendanceInfo.values || ""
          , v = new Date(r.attendanceInfo.startDate).getDate()
          , _ = new Date(o.state.sysTime).getDate();
        n.firstDate = v,
          n.todayDate = _,
          n.isAttended = m[_ - v] === "1",
          n.attendRecord = m,
          n.neverAttend = !/1/.test(m)
      }
      );
      async function i(m = !1) {
        t("share", m)
      }
      const u = K(null)
        , a = K(null);
      async function c() {
        if (!n.isQuestionStart) {
          at("\u5C06\u4E8E6\u67088\u65E5\u6B63\u5F0F\u5F00\u542F\uFF5E");
          return
        }
        if (r.isExpired) {
          at("\u6D3B\u52A8\u5DF2\u7ECF\u8FC7\u671F\uFF5E\u5927\u4EBA\u8BB0\u5F97\u5151\u6362\u5B9D\u888B\u54E6\uFF5E");
          return
        }
        n.isAttended || (o.state.roleInfo || (at("\u8BF7\u5728\u5468\u8FB9\u5C4B\u5185\u7B7E\u5230\uFF5E"),
          setTimeout(() => {
            qt()
          }
            , 1500)),
          u.value.openAttendPop().then(m => {
            m && t("updateAttend", m)
          }
          ))
      }
      const d = () => {
        if (!n.isQuestionStart) {
          at("\u6D3B\u52A8\u5C06\u4E8E6\u67088\u65E5\u5F00\u542F\uFF0C\u656C\u8BF7\u671F\u5F85~");
          return
        }
        if (!o.state.roleInfo) {
          at("\u8BF7\u5728\u6E38\u620F\u5185\u5468\u8FB9\u5C4B\u53C2\u4E0E\uFF5E"),
            setTimeout(() => {
              qt()
            }
              , 1500);
          return
        }
        if (r.isExpired) {
          at("\u6D3B\u52A8\u5DF2\u7ECF\u8FC7\u671F\uFF5E\u5927\u4EBA\u8BB0\u5F97\u5151\u6362\u5B9D\u888B\u54E6\uFF5E");
          return
        }
        n.answerPopType = 1,
          $("html, body").addClass("ov")
      }
        , g = m => {
          n.answerPopType = m
        }
        , F = K()
        , E = K()
        , h = K();
      window.onscroll = Xs(function () {
        const m = window.innerHeight || document.documentElement.clientHeight;
        F.value.getBoundingClientRect().top < m && F.value.classList.add("action"),
          h.value.getBoundingClientRect().top < m && (h.value.classList.add("action"),
            s()),
          E.value.getBoundingClientRect().top < m && E.value.classList.add("action")
      });
      function p() {
        a.value.showPop()
      }
      return ee(() => {
        const m = new Date("2022/06/08 00:00:00").getTime();
        new Date(o.state.sysTime).getTime() > m && (n.isQuestionStart = !0)
      }
      ),
        (m, v) => (T(),
          I(nt, null, [f("section", Pu, [Nu, Mu, f("div", Ou, [f("div", Uu, [ju, f("div", {
            class: "problem-box",
            onClick: d
          }, [x(n).isQuestionStart ? z("", !0) : (T(),
            I("div", Hu, zu)), x(n).isQuestionStart && !x(o).state.roleInfo ? (T(),
              I("div", Vu, Gu)) : z("", !0), x(n).isQuestionStart && x(o).state.roleInfo ? (T(),
                sn(Ze, {
                  key: 2,
                  ref: "popShareRef",
                  isHome: 1
                }, null, 512)) : z("", !0)])]), f("div", Ju, [Yu, f("div", Qu, [x(n).neverAttend ? (T(),
                  I("div", Xu, tl)) : (T(),
                    I("div", el, [f("div", nl, [(T(),
                      I(nt, null, Lt(21, _ => f("div", {
                        class: rt(["calendar-item", {
                          done: x(n).attendRecord[_ + 5 - x(n).firstDate] == "1",
                          ready: x(n).attendRecord[_ + 5 - x(n).firstDate] != "1" && x(n).todayDate == _ + 5
                        }])
                      }, q(_ + 5), 3)), 64))])])), f("a", {
                        href: "javascript:;",
                        class: rt(["attend-btn", {
                          disabled: x(n).isAttended
                        }]),
                        onClick: c
                      }, [x(o).state.roleInfo ? x(n).isAttended ? (T(),
                        I("p", sl, "\u5DF2\u7B7E\u5230")) : (T(),
                          I("p", ol, "\u70B9\u51FB\u7B7E\u5230\uFF5E")) : (T(),
                            I("p", rl, "\u5468\u8FB9\u5C4B\u5185\u53C2\u4E0E"))], 2), f("div", il, [f("img", {
                              src: Ui,
                              class: "attend-paperman",
                              ref_key: "attendMan",
                              ref: F
                            }, null, 512)])])]), f("div", al, [ul, f("div", ll, [cl, dl, f("div", hl, [r.isShared ? (T(),
                              I("p", pl, "\uFF08\u5DF2\u5206\u4EAB\uFF09")) : (T(),
                                I("p", fl, "\u73B0\u5728\u53BB\u5206\u4EAB")), f("a", {
                                  href: "javascript:;",
                                  class: rt(["share-btn", {
                                    disabled: r.isShared
                                  }]),
                                  onClick: v[0] || (v[0] = _ => i(!1))
                                }, [x(o).state.isMobile && !x(o).state.roleInfo ? (T(),
                                  I("p", gl, "\u5468\u8FB9\u5C4B\u5185\u5206\u4EAB")) : (T(),
                                    I("p", ml, "\u5206\u4EAB\u9875\u9762"))], 2)]), f("div", {
                                      class: "share-paperman",
                                      ref_key: "shareMan",
                                      ref: E
                                    }, null, 512)])]), f("div", vl, [yl, f("div", wl, [f("p", {
                                      class: "txt"
                                    }, [El, f("i", {
                                      class: "icon-what",
                                      onClick: p
                                    })]), f("div", {
                                      class: "paperbox",
                                      ref_key: "consumeMan",
                                      ref: h
                                    }, Fl, 512), f("div", Bl, [f("div", xl, [f("div", {
                                      class: "cover-line",
                                      style: jn(x(n).processWidth)
                                    }, Al, 4)]), f("div", kl, [f("span", Tl, q(e.cur), 1), f("span", Sl, "/" + q(e.total), 1), r.maxLimit ? (T(),
                                      I("span", Il, "(\u4ECA\u65E5\u5DF2\u5230\u8FBE\u5956\u52B1\u4E0A\u9650)")) : z("", !0)])])])])]), Ct(yu, {
                                        onChangeType: g,
                                        showType: x(n).answerPopType,
                                        onShare: i
                                      }, null, 8, ["showType"])]), Ct($u, {
                                        hint: "\u4E3A\u4FDD\u8BC1\u6BCF\u4F4D\u5927\u4EBA\u90FD\u53EF\u4EE5\u53C2\u4E0E\u672C\u6B21\u6D3B\u52A8\u798F\u5229\uFF0C\u6BCF\u65E5\u6700\u591A\u53EA\u80FD\u901A\u8FC7\u6B64\u65B9\u5F0F\u83B7\u5F9760\u5B9D\u888B\u54E6",
                                        ref_key: "popHintRef",
                                        ref: a
                                      }, null, 512), Ct(Su, {
                                        ref_key: "popAttendRef",
                                        ref: u,
                                        attendRecord: x(n).attendRecord,
                                        todayDate: x(n).todayDate,
                                        firstDate: x(n).firstDate
                                      }, null, 8, ["attendRecord", "todayDate", "firstDate"])], 64))
    }
  })
  , Rl = {
    class: "part-3"
  }
  , Ll = {
    class: "contbox"
  }
  , $l = {
    class: "longbox"
  }
  , Pl = ["onClick"]
  , Nl = {
    class: "img"
  }
  , Ml = ["src"]
  , Ol = {
    class: "name"
  }
  , Ul = {
    class: "price"
  }
  , jl = f("i", null, "\uFFE5", -1)
  , Hl = {
    class: "num"
  }
  , ql = ft({
    props: ["recommendSkuList"],
    setup(e) {
      const t = kt()
        , r = n => {
          t.state.roleInfo ? location.href = n : (at("\u8BF7\u5728\u5468\u8FB9\u5C4B\u5185\u53C2\u4E0E\uFF5E"),
            setTimeout(() => {
              qt()
            }
              , 1500))
        }
        ;
      function o(n) {
        const s = n.split(".");
        return s.length === 2 && s[1] === "00" ? s[0] : n
      }
      return (n, s) => (T(),
        I("section", Rl, [f("div", Ll, [f("div", $l, [(T(!0),
          I(nt, null, Lt(e.recommendSkuList, i => (T(),
            I("a", {
              href: "javascript:;",
              class: "goods-item",
              key: i.skuId,
              onClick: u => r(i.clickUrl)
            }, [f("div", Nl, [f("img", {
              src: i.imgUrl
            }, null, 8, Ml)]), f("p", Ol, q(i.name), 1), f("p", Ul, [jl, f("span", Hl, q(o(i.price)), 1)])], 8, Pl))), 128))])])]))
    }
  })
  , zl = {
    class: "part-4"
  }
  , Vl = on('<div class="contbox"><div class="longbox"><h3>1\u3001\u6D3B\u52A8\u65F6\u95F4</h3><p>\u672C\u6B21\u6D3B\u52A8\u65F6\u95F4\u4E3A6\u67081\u65E5\u81F36\u670828\u65E5\uFF1B</p><h3>2\u3001\u6D3B\u52A8\u53C2\u4E0E\u65B9\u5F0F</h3><p>6\u67081\u65E5\u81F36\u670821\u65E5\u671F\u95F4\uFF0C\u5728\u5468\u8FB9\u5C4B\u5B9E\u4ED8\u6D88\u8D39\u6BCF\u6EE1200\u5143\u53EF\u83B7\u5F9720\u5B9D\u888B\uFF0C\u56E0\u53D7\u652F\u4ED8\u7CFB\u7EDF\u6570\u636E\u5EF6\u8FDF\u5F71\u54CD\uFF0C\u5B9D\u888B\u5C06\u4F1A\u5728\u652F\u4ED8\u540E\u534A\u5C0F\u65F6\u5DE6\u53F3\u5230\u8D26\uFF08\u6BCF\u65E5\u5956\u52B1\u4E0A\u9650\u4E3A60\u5B9D\u888B\uFF09\uFF1B</p><p>6\u67088\u65E5\u81F36\u670821\u65E5\u671F\u95F4\uFF0C\u5927\u4EBA\u53EF\u4EE5\u6BCF\u65E5\u8FDB\u5165\u5468\u8FB9\u5C4B\u53C2\u4E0E\u6D3B\u52A8\uFF0C\u83B7\u5F97\u66F4\u591A\u5B9D\u888B\uFF1B\u5176\u4E2D\uFF1A</p><p>-\u5206\u4EAB\u6D3B\u52A8\u7ED9\u670B\u53CB\u53EF\u4EE5\u83B7\u5F972\u5B9D\u888B\uFF1B</p><p>-\u6BCF\u65E5\u7B7E\u5230\u53EF\u4EE5\u83B7\u5F971\u5B9D\u888B\uFF0C\u7B7E\u6EE110\u65E5\u5F53\u5929\u989D\u5916\u8D60\u900110\u5B9D\u888B\uFF1B</p><p>-\u53C2\u4E0E\u6BCF\u65E5\u7B54\u9898\u5E76\u56DE\u7B54\u6B63\u786E\uFF0C\u53EF\u83B7\u5F975\u5B9D\u888B\uFF0C\u9519\u8FC7\u5F53\u65E5\u7B54\u9898\u4E0D\u53EF\u7EE7\u7EED\u53C2\u4E0E\uFF1B</p><h3>3\u3001\u5956\u54C1\u5151\u6362\u89C4\u5219</h3><p>-\u901A\u8FC7\u4EE5\u4E0A\u65B9\u5F0F\u83B7\u5F97\u7684\u5B9D\u888B\uFF0C\u53EF\u4EE5\u5728\u6D3B\u52A8\u9875\u5904\u9009\u62E9\u5151\u6362\u5927\u4EBA\u5FC3\u4EEA\u7684\u5956\u54C1\uFF0C\u5956\u54C1\u5E93\u5B58\u6709\u9650\uFF0C\u5148\u5230\u5148\u5F97\uFF1B</p><p>-\u59826\u670828\u65E5\u6D3B\u52A8\u7ED3\u675F\u540E\u5927\u4EBA\u4ECD\u6709\u5269\u4F59\u5B9D\u888B\u672A\u53CA\u65F6\u5151\u6362\uFF0C\u5C06\u6309\u716710\u5B9D\u888B=1\u79EF\u5206\u7684\u6BD4\u4F8B\uFF0C\u81EA\u52A8\u8F6C\u5316\u6210\u5546\u57CE\u79EF\u5206\uFF0C\u53D1\u653E\u5230\u5BF9\u5E94\u7684\u89D2\u8272\u8D26\u6237\uFF1B</p><p>-\u6D3B\u52A8\u5151\u6362\u6240\u83B7\u5F97\u7684\u79EF\u5206\u4E00\u5E74\u5185\u6709\u6548\uFF0C\u5468\u8FB9\u5151\u6362\u5238\u3001\u6EE1\u51CF\u5238\u7B49\u6709\u6548\u671F\u622A\u6B62\u81F32022\u5E747\u670830\u65E5\uFF0C\u8BF7\u5927\u4EBA\u53CA\u65F6\u4E0B\u5355\u4F7F\u7528\uFF5E</p><p>-\u6D3B\u52A8\u4E2D\u83B7\u5F97\u5956\u54C1\u4E3A\u6EE1\u51CF\u4F18\u60E0\u5238\u6216\u8D60\u54C1\u5238, \u5927\u4EBA\u5728\u4E0B\u5355\u65F6\u53EF\u9009\u62E9\u4F7F\u7528\uFF0C\u6BCF\u4E2A\u8BA2\u5355\u9650\u4F7F\u7528\u4E00\u5F20\u5238\u54E6\uFF5E</p><p>\u672C\u6D3B\u52A8\u6700\u7EC8\u89E3\u91CA\u6743\uFF0C\u5F52\u7F51\u6613\u6E38\u620F\u4E0E\u9634\u9633\u5E08\u5468\u8FB9\u5C4B\u5B98\u65B9\u6240\u6709\u3002</p></div></div>', 1)
  , Wl = [Vl]
  , Gl = ft({
    setup(e) {
      return (t, r) => (T(),
        I("section", zl, Wl))
    }
  });
var Jl = "/html/yys20220601/assets/icon-pyq.ba7dae99.png"
  , Yl = "/html/yys20220601/assets/icon-wx.002cca43.png"
  , Ql = "/html/yys20220601/assets/icon-wb.8690d101.png";
const Xl = e => (_e("data-v-7c3303ac"),
  e = e(),
  Fe(),
  e)
  , Kl = {
    key: 0,
    class: "modal"
  }
  , Zl = {
    class: "modal-pc"
  }
  , tc = {
    class: "modal-pc__title"
  }
  , ec = ["src"]
  , nc = {
    key: 1,
    class: "modal"
  }
  , rc = {
    class: "modal-mobile"
  }
  , sc = {
    class: "modal-mobile__content"
  }
  , oc = ["href", "onClick"]
  , ic = ["src"]
  , ac = {
    key: 2,
    class: "modal"
  }
  , uc = Xl(() => f("div", {
    class: "modal-mask"
  }, null, -1))
  , lc = {
    class: "modal-success"
  }
  , cc = {
    key: 0
  }
  , dc = {
    key: 1
  }
  , hc = ft({
    props: ["isShared"],
    emits: ["updateShare"],
    setup(e, { expose: t, emit: r }) {
      const o = e
        , n = kt()
        , s = K(!1)
        , i = K(!1)
        , u = K(!1)
        , a = K(!1)
        , c = At({
          shouldUpdateShare: !1,
          isPostShare: !1
        })
        , d = K("");
      let g = window.location.origin == "https://t.act.gift.163.com" || window.location.origin == "http://localhost:3000";
      oe.toDataURL(g ? "http://u.163.com/vZRZBdLs7" : "http://u.163.com/CKHQPfV42").then(B => {
        d.value = B
      }
      ).catch(B => {
        console.error(B)
      }
      );
      function F(B) {
        B ? c.isPostShare = !0 : c.isPostShare = !1,
          n.state.isMobile ? n.state.roleInfo ? (s.value = !0,
            $("html, body").addClass("ov")) : qt() : (i.value = !0,
              $("html, body").addClass("ov"))
      }
      function E() {
        n.state.isMobile ? s.value = !1 : i.value = !1,
          $("html, body").removeClass("ov")
      }
      async function h() {
        if (!n.state.roleInfo)
          a.value = !0;
        else if (!o.isShared) {
          const B = await xt.allApi.afterShare().catch(S => console.log);
          B.code == 0 && B.result.resultCode == 0 ? (ke(),
            c.shouldUpdateShare = !0) : a.value = !0
        }
        Ut("\u9634\u9633\u5E086\u6708\u5FEB\u95EA\u731C\u8C1C-\u5206\u4EAB\u6D3B\u52A8\u94FE\u63A5"),
          n.state.isMobile ? s.value = !1 : i.value = !1,
          u.value = !0
      }
      function p() {
        u.value = !1,
          $("html, body").removeClass("ov"),
          c.shouldUpdateShare && r("updateShare")
      }
      const v = `title=\u9080\u8BF7\u60A8\u53C2\u52A0\u9634\u9633\u5E08\u5468\u8FB9\u5C4B\u79D8\u5B9D\u306E\u731C\u8C1C\u793E\u6D3B\u52A8&content=\u8FDB\u5165\u9634\u9633\u5E08\u6E38\u620F\u5185\u5468\u8FB9\u5C4B\uFF0C\u53C2\u4E0E\u731C\u8C1C\u3001\u7B7E\u5230\u4E92\u52A8\uFF0C\u9886\u53D6\u6D77\u91CF\u5468\u8FB9\u60CA\u559C\u54E6&img=https://webinput.nie.netease.com/img/yys/icon.png/72&url=${`${g ? "http://gmall.dev.webapp.163.com:8002" : "https://yys-mg.gift.163.com"}/cgi/oauth?url=${g ? "http://u.163.com/7YkK6rpyt" : "http://u.163.com/WUg5w927B"}`}`
        , _ = [{
          title: "\u670B\u53CB\u5708",
          link: "yysp://share/realmall/pyq/?" + v,
          icon: Jl
        }, {
          title: "\u597D\u53CB/\u7FA4\u804A",
          link: "yysp://share/realmall/weixin/?" + v,
          icon: Yl
        }, {
          title: "\u65B0\u6D6A\u5FAE\u535A",
          link: "yysp://share/realmall/weibo/?" + v,
          icon: Ql
        }];
      MShare.init({
        debug: !1,
        hideMoments: !1,
        hideFriend: !1,
        wxapi: [],
        tag: [],
        ready: function () { }
      }),
        MShare.setShare({
          is_start: !0,
          title: "\u9080\u8BF7\u60A8\u53C2\u52A0\u9634\u9633\u5E08\u5468\u8FB9\u5C4B\u79D8\u5B9D\u306E\u731C\u8C1C\u793E\u6D3B\u52A8",
          desc: "\u8FDB\u5165\u9634\u9633\u5E08\u6E38\u620F\u5185\u5468\u8FB9\u5C4B\uFF0C\u53C2\u4E0E\u731C\u8C1C\u3001\u7B7E\u5230\u4E92\u52A8\uFF0C\u9886\u53D6\u6D77\u91CF\u5468\u8FB9\u60CA\u559C\u54E6",
          moments_title: "\u9080\u8BF7\u60A8\u53C2\u52A0\u9634\u9633\u5E08\u5468\u8FB9\u5C4B\u79D8\u5B9D\u306E\u731C\u8C1C\u793E\u6D3B\u52A8",
          url: g ? "http://u.163.com/7YkK6rpyt" : "http://u.163.com/WUg5w927B",
          imgurl: "https://webinput.nie.netease.com/img/yys/icon.png/72"
        });
      const y = async function (B) {
        setTimeout(() => {
          h()
        }
          , 1e3)
      };
      return t({
        openSharePop: F
      }),
        (B, S) => (T(),
          I(nt, null, [i.value ? (T(),
            I("div", Kl, [f("div", {
              class: "modal-mask",
              onClick: E
            }), f("div", Zl, [f("p", tc, q(x(c).isPostShare ? `\u7535\u8111\u7AEF\u7528\u6237\u6682\u65E0\u6CD5\u5206\u4EAB\u6D77\u62A5\u56FE\u7247
\u8BF7\u7528\u624B\u673A\u8FDB\u5165\u6E38\u620F\u53C2\u4E0E\u6D3B\u52A8\u54E6\uFF5E` : `\u7535\u8111\u7AEF\u7528\u6237\u8BF7\u7528\u624B\u673A
\u5FAE\u4FE1\u6216\u8005\u5FAE\u535A\u626B\u7801\u53C2\u4E0E\u5206\u4EAB\u54E6`), 1), d.value ? (T(),
              I("img", {
                key: 0,
                src: d.value,
                class: rt(["modal-pc__qrcode", {
                  bigger: x(c).isPostShare
                }])
              }, null, 10, ec)) : z("", !0), x(c).isPostShare ? z("", !0) : (T(),
                I("a", {
                  key: 1,
                  href: "javascript:;",
                  class: "modal-pc__btn",
                  onClick: h
                })), f("i", {
                  class: "modal-close",
                  onClick: E
                })])])) : z("", !0), s.value ? (T(),
                  I("div", nc, [f("div", {
                    class: "modal-mask",
                    onClick: E
                  }), f("div", rc, [f("div", sc, [(T(),
                    I(nt, null, Lt(_, R => f("a", {
                      class: "modal-mobile__item",
                      href: R.link,
                      key: R.title,
                      onClick: M => y(R.link)
                    }, [f("img", {
                      src: R.icon,
                      class: "modal-mobile__icon"
                    }, null, 8, ic), f("p", null, q(R.title), 1)], 8, oc)), 64))]), f("i", {
                      class: "modal-close",
                      onClick: E
                    })])])) : z("", !0), u.value ? (T(),
                      I("div", ac, [uc, f("div", lc, [e.isShared || !x(n).state.roleInfo || a.value ? (T(),
                        I("p", cc, "\u5206\u4EAB\u6210\u529F\uFF01\u611F\u8C22\u5927\u4EBA\u7684\u6D3B\u8DC3\u53C2\u4E0E\uFF5E")) : (T(),
                          I("p", dc, "\u5206\u4EAB\u6210\u529F\uFF01\u79D8\u5B9D\u5DF2\u7ECF\u5C062\u5B9D\u888B\u53D1\u653E\u5230\u60A8\u7684\u8D26\u6237")), f("i", {
                            class: "modal-close",
                            onClick: p
                          })])])) : z("", !0)], 64))
    }
  });
var fc = se(hc, [["__scopeId", "data-v-7c3303ac"]]);
const pc = e => (_e("data-v-df8ee59c"),
  e = e(),
  Fe(),
  e)
  , gc = {
    key: 0,
    class: "modal"
  }
  , mc = pc(() => f("div", {
    class: "modal-mask"
  }, null, -1))
  , vc = ft({
    setup(e) {
      const t = kt()
        , r = K(!1);
      function o() {
        let n = window.location.origin == "https://t.act.gift.163.com" || window.location.origin == "http://localhost:3000";
        t.state.roleInfo ? location.href = n ? "http://gmall.dev.webapp.163.com:8002" : "https://yys-mg.gift.163.com" : qt(!0)
      }
      return Hn(() => {
        const n = new Date("2022/06/29 00:00").getTime();
        new Date(t.state.sysTime).getTime() > n && (r.value = !0,
          $("html, body").addClass("ov"))
      }
      ),
        (n, s) => r.value ? (T(),
          I("div", gc, [mc, f("div", {
            class: "modal-expired"
          }, [f("a", {
            href: "javascript:;",
            class: "btn-yes",
            onClick: o
          })])])) : z("", !0)
    }
  });
var yc = se(vc, [["__scopeId", "data-v-df8ee59c"]]);
const wc = {
  key: 0,
  class: "p-index"
}
  , Ec = f("div", {
    class: "header-grass"
  }, null, -1)
  , Cc = {
    key: 0
  }
  , Bc = ft({
    setup(e) {
      const t = kt()
        , r = At({
          defaultImg: "../assets/img/icon-bd.png",
          money: 0,
          awardList: [],
          recommendSkuList: [],
          isShowPopAllPrize: !1,
          dataReady: !1,
          taskDesc: {
            task1: "",
            task2: "",
            task3: "",
            task4: ""
          },
          attendanceInfo: {
            desc: "",
            startDate: "",
            endDate: "",
            values: 0
          },
          isShared: !1,
          task4Info: {
            cur: 0,
            total: 1,
            maxLimit: !1
          },
          isExpired: !1,
          showHeaderMan: !1
        })
        , o = async () => {
          const d = await xt.allApi.homeApi();
          let g = d.result;
          r.awardList = g.awardList,
            r.recommendSkuList = g.recommendSkuList,
            r.attendanceInfo = g.task2.attendanceInfo,
            r.isShared = g.task3.isTodayDone,
            r.task4Info.cur = g.task4.consumeTaskInfo.currentValue / 100,
            r.task4Info.total = g.task4.consumeTaskInfo.maxValue / 100,
            g.task4.consumeTaskInfo.maxLimit && (r.task4Info.cur = 200),
            r.task4Info.maxLimit = g.task4.consumeTaskInfo.maxLimit,
            t.commit("updateRoleInfo", g.roleInfo),
            t.commit("updateUrlParam"),
            t.commit("updateUserAgent"),
            t.commit("updateSysTime", d.sysTime);
          const F = new Date("2022/06/22 00:00").getTime();
          new Date(t.state.sysTime).getTime() > F && (r.isExpired = !0),
            r.dataReady = !0
        }
        ;
      function n() {
        window.location.origin == "https://t.act.gift.163.com" || window.location.origin == "http://localhost:3000" ? window.location.href = "http://gmall.dev.webapp.163.com:8002/" : window.location.href = "https://yys-mg.gift.163.com/"
      }
      const s = K(null);
      function i(d) {
        if (r.isExpired) {
          at("\u6D3B\u52A8\u5DF2\u7ECF\u8FC7\u671F\uFF5E\u5927\u4EBA\u8BB0\u5F97\u5151\u6362\u5B9D\u888B\u54E6\uFF5E");
          return
        }
        s.value.openSharePop(d)
      }
      function u(d) {
        r.attendanceInfo.values = d
      }
      function a() {
        r.isShared = !0
      }
      function c() {
        r.showHeaderMan = !0
      }
      return ee(async () => {
        await o(),
          t.state.roleInfo ? Ut("\u9634\u9633\u5E086\u6708\u5FEB\u95EA\u731C\u8C1C-\u7AD9\u5185\u8BBF\u95EE") : /qrcode/.test(t.state.from) ? Ut("\u9634\u9633\u5E086\u6708\u5FEB\u95EA\u731C\u8C1C-\u7AD9\u5916\u626B\u7801\u8BBF\u95EE") : Ut("\u9634\u9633\u5E086\u6708\u5FEB\u95EA\u731C\u8C1C-\u7AD9\u5916\u94FE\u63A5\u8BBF\u95EE")
      }
      ),
        (d, g) => (T(),
          I(nt, null, [x(r).dataReady ? (T(),
            I("div", wc, [f("header", null, [Ec, f("img", {
              src: Ar,
              class: rt(["header-paperman", {
                show: x(r).showHeaderMan
              }]),
              onLoad: c
            }, null, 34), x(t).state.roleInfo ? (T(),
              I("div", Cc, [f("a", {
                href: "javascript:;",
                class: "back-btn",
                onClick: n
              }), f("a", {
                href: "javascript:;",
                class: "share-btn",
                onClick: g[0] || (g[0] = F => i())
              })])) : z("", !0)]), x(r).awardList.length ? (T(),
                sn(Ni, {
                  key: 0,
                  awardList: x(r).awardList
                }, null, 8, ["awardList"])) : z("", !0), Ct(Dl, {
                  attendanceInfo: x(r).attendanceInfo,
                  isShared: x(r).isShared,
                  cur: x(r).task4Info.cur,
                  total: x(r).task4Info.total,
                  maxLimit: x(r).task4Info.maxLimit,
                  onShare: i,
                  onRefresh: o,
                  isExpired: x(r).isExpired,
                  onUpdateAttend: u
                }, null, 8, ["attendanceInfo", "isShared", "cur", "total", "maxLimit", "isExpired"]), Ct(ql, {
                  recommendSkuList: x(r).recommendSkuList
                }, null, 8, ["recommendSkuList"]), Ct(Gl)])) : z("", !0), Ct(fc, {
                  ref_key: "popShareRef",
                  ref: s,
                  isShared: x(r).isShared,
                  onUpdateShare: a
                }, null, 8, ["isShared"]), Ct(yc)], 64))
    }
  });
export { Bc as default };