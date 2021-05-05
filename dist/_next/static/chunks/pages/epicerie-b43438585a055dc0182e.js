(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [53],
  {
    6086: function (e) {
      "use strict";
      var t = Object.assign.bind(Object);
      (e.exports = t), (e.exports.default = e.exports);
    },
    5456: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return u;
          },
        });
      var n = i(5893),
        a = i(6265),
        r = i(1120),
        o = i(9895),
        s = i(1749),
        c = i(2318),
        d = (0, r.Z)(function (e) {
          return {
            card: { display: "flex", height: "auto", minHeight: 500 },
            details: { display: "flex", flexDirection: "column", flex: 1 },
            content: { flex: "1 0 auto" },
            cover: { flex: 1 },
            playIcon: { height: 38, width: 38 },
            cardDescription: { padding: 50 },
            cardImage: {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            },
            mainFeaturedPost: {
              position: "relative",
              backgroundColor: e.palette.grey[800],
              color: e.palette.common.white,
              marginBottom: e.spacing(4),
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            },
            overlay: {
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.3)",
            },
            mainFeaturedPostContent: (0, a.Z)(
              { position: "relative", padding: e.spacing(3) },
              e.breakpoints.up("md"),
              { padding: e.spacing(6), paddingRight: 0 }
            ),
          };
        }),
        l = {
          image: "restaurant.jpeg",
          imageText: "restaurant",
          title: "Restaurant Go\xfbt d'Ouest",
          description:
            "La gastronomie de notre pays est extr\xeamement riche. Chaque r\xe9gion est fi\xe8re de ses produits, de ses traditions culinaires.\n                            Nul besoin de partir loin pour se faire plaisir:\n                            De la Normandie aux Pyr\xe9n\xe9es, Go\xfbt d\u2019Ouest Vous proposera modestement de petits plaisirs au bout de la fourchette.",
        };
      function u() {
        var e = d();
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)(o.Z, {
            className: e.mainFeaturedPost,
            style: { backgroundImage: "url(".concat(l.image, ")") },
            children: [
              (0, n.jsx)("img", {
                style: { display: "none" },
                src: l.image,
                alt: l.imageText,
              }),
              (0, n.jsx)("div", { className: e.overlay }),
              (0, n.jsx)(s.Z, {
                container: !0,
                children: (0, n.jsx)(s.Z, {
                  item: !0,
                  md: 6,
                  children: (0, n.jsxs)("div", {
                    className: e.mainFeaturedPostContent,
                    children: [
                      (0, n.jsx)(c.Z, {
                        component: "h1",
                        variant: "h3",
                        color: "inherit",
                        gutterBottom: !0,
                        children: l.title,
                      }),
                      (0, n.jsx)(c.Z, {
                        variant: "h5",
                        color: "inherit",
                        paragraph: !0,
                        children: l.description,
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
    },
    5312: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/epicerie",
        function () {
          return i(5456);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 410], function () {
      return (t = 5312), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
