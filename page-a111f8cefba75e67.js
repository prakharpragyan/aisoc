(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        1538: function(e, s, r) {
            Promise.resolve().then(r.bind(r, 2774))
        },
        2774: function(e, s, r) {
            "use strict";
            r.r(s), r.d(s, {
                default: function() {
                    return X
                }
            });
            var t = r(7437),
                a = r(2265),
                i = r(7497),
                n = r(7053),
                l = r(535),
                c = r(1994),
                d = r(3335);

            function o() {
                for (var e = arguments.length, s = Array(e), r = 0; r < e; r++) s[r] = arguments[r];
                return (0, d.m6)((0, c.W)(s))
            }
            let x = (0, l.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                u = a.forwardRef((e, s) => {
                    let {
                        className: r,
                        variant: a,
                        size: i,
                        asChild: l = !1,
                        ...c
                    } = e, d = l ? n.g7 : "button";
                    return (0, t.jsx)(d, {
                        className: o(x({
                            variant: a,
                            size: i,
                            className: r
                        })),
                        ref: s,
                        ...c
                    })
                });
            u.displayName = "Button";
            let m = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)("textarea", {
                    className: o("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                    ref: s,
                    ...a
                })
            });
            m.displayName = "Textarea";
            let h = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)("div", {
                    ref: s,
                    className: o("rounded-lg border bg-card text-card-foreground shadow-sm", r),
                    ...a
                })
            });
            h.displayName = "Card";
            let f = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)("div", {
                    ref: s,
                    className: o("flex flex-col space-y-1.5 p-6", r),
                    ...a
                })
            });
            f.displayName = "CardHeader";
            let p = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)("div", {
                    ref: s,
                    className: o("text-2xl font-semibold leading-none tracking-tight", r),
                    ...a
                })
            });
            p.displayName = "CardTitle";
            let g = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)("div", {
                    ref: s,
                    className: o("text-sm text-muted-foreground", r),
                    ...a
                })
            });
            g.displayName = "CardDescription";
            let j = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)("div", {
                    ref: s,
                    className: o("p-6 pt-0", r),
                    ...a
                })
            });
            j.displayName = "CardContent";
            let v = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)("div", {
                    ref: s,
                    className: o("flex items-center p-6 pt-0", r),
                    ...a
                })
            });
            v.displayName = "CardFooter";
            var b = r(3199);
            let N = b.fC,
                y = a.forwardRef((e, s) => {
                    let {
                        className: r,
                        ...a
                    } = e;
                    return (0, t.jsx)(b.aV, {
                        ref: s,
                        className: o("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", r),
                        ...a
                    })
                });
            y.displayName = b.aV.displayName;
            let w = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)(b.xz, {
                    ref: s,
                    className: o("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", r),
                    ...a
                })
            });
            w.displayName = b.xz.displayName;
            let k = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)(b.VY, {
                    ref: s,
                    className: o("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", r),
                    ...a
                })
            });
            k.displayName = b.VY.displayName;
            let C = (0, l.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function S(e) {
                let {
                    className: s,
                    variant: r,
                    ...a
                } = e;
                return (0, t.jsx)("div", {
                    className: o(C({
                        variant: r
                    }), s),
                    ...a
                })
            }
            var A = r(314);
            let R = a.forwardRef((e, s) => {
                let {
                    className: r,
                    children: a,
                    ...i
                } = e;
                return (0, t.jsxs)(A.fC, {
                    ref: s,
                    className: o("relative overflow-hidden", r),
                    ...i,
                    children: [(0, t.jsx)(A.l_, {
                        className: "h-full w-full rounded-[inherit]",
                        children: a
                    }), (0, t.jsx)(z, {}), (0, t.jsx)(A.Ns, {})]
                })
            });
            R.displayName = A.fC.displayName;
            let z = a.forwardRef((e, s) => {
                let {
                    className: r,
                    orientation: a = "vertical",
                    ...i
                } = e;
                return (0, t.jsx)(A.gb, {
                    ref: s,
                    orientation: a,
                    className: o("flex touch-none select-none transition-colors", "vertical" === a && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === a && "h-2.5 flex-col border-t border-t-transparent p-[1px]", r),
                    ...i,
                    children: (0, t.jsx)(A.q4, {
                        className: "relative flex-1 rounded-full bg-border"
                    })
                })
            });
            z.displayName = A.gb.displayName;
            let E = (0, l.j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
                    variants: {
                        variant: {
                            default: "bg-background text-foreground",
                            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                Z = a.forwardRef((e, s) => {
                    let {
                        className: r,
                        variant: a,
                        ...i
                    } = e;
                    return (0, t.jsx)("div", {
                        ref: s,
                        role: "alert",
                        className: o(E({
                            variant: a
                        }), r),
                        ...i
                    })
                });
            Z.displayName = "Alert";
            let T = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)("h5", {
                    ref: s,
                    className: o("mb-1 font-medium leading-none tracking-tight", r),
                    ...a
                })
            });
            T.displayName = "AlertTitle";
            let L = a.forwardRef((e, s) => {
                let {
                    className: r,
                    ...a
                } = e;
                return (0, t.jsx)("div", {
                    ref: s,
                    className: o("text-sm [&_p]:leading-relaxed", r),
                    ...a
                })
            });
            L.displayName = "AlertDescription";
            var _ = r(6865),
                q = r(4502),
                P = r(1817),
                I = r(407),
                V = r(5900),
                H = r(8867),
                O = r(8919),
                Q = r(1178),
                D = r(1810),
                F = r(7157),
                G = r(3417),
                Y = r(1769),
                B = r(5621);
            let W = a.forwardRef((e, s) => {
                let {
                    className: r,
                    type: a,
                    ...i
                } = e;
                return (0, t.jsx)("input", {
                    type: a,
                    className: o("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
                    ref: s,
                    ...i
                })
            });
            W.displayName = "Input";
            let K = {
                Plaintiff: "The party who initiates a lawsuit before a court.",
                Defendant: "The party against whom a lawsuit is filed.",
                Tort: "A civil wrong that causes someone to suffer loss or harm, resulting in legal liability for the person who commits the tortious act.",
                Statute: "A written law passed by a legislative body.",
                Precedent: "A principle or rule established in a previous legal case that is either binding on or persuasive for a court when deciding subsequent cases with similar issues or facts."
            };

            function M() {
                let [e, s] = (0, a.useState)(""), [r, i] = (0, a.useState)("");
                return (0, t.jsxs)(h, {
                    children: [(0, t.jsx)(f, {
                        children: (0, t.jsx)(p, {
                            children: "Legal Dictionary"
                        })
                    }), (0, t.jsxs)(j, {
                        children: [(0, t.jsxs)("div", {
                            className: "flex space-x-2 mb-4",
                            children: [(0, t.jsx)(W, {
                                type: "text",
                                placeholder: "Search legal terms...",
                                value: e,
                                onChange: e => s(e.target.value)
                            }), (0, t.jsx)(u, {
                                onClick: () => {
                                    let s = e.toLowerCase(),
                                        r = Object.entries(K).find(e => {
                                            let [r] = e;
                                            return r.toLowerCase() === s
                                        });
                                    i(r ? r[1] : "Term not found in the dictionary.")
                                },
                                children: "Search"
                            })]
                        }), (0, t.jsx)(R, {
                            className: "h-[200px]",
                            children: r && (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h3", {
                                    className: "font-bold",
                                    children: e
                                }), (0, t.jsx)("p", {
                                    children: r
                                })]
                            })
                        })]
                    })]
                })
            }
            let J = [{
                title: "Supreme Court Rules on Major Privacy Case",
                date: "2025-02-01"
            }, {
                title: "New Employment Law Takes Effect",
                date: "2025-01-28"
            }, {
                title: "Landmark Environmental Lawsuit Settled",
                date: "2025-01-25"
            }, {
                title: "Legal Tech Startup Revolutionizes Case Management",
                date: "2025-01-22"
            }];

            function U() {
                return (0, t.jsxs)(h, {
                    children: [(0, t.jsx)(f, {
                        children: (0, t.jsx)(p, {
                            children: "Recent Legal News"
                        })
                    }), (0, t.jsx)(j, {
                        children: (0, t.jsx)(R, {
                            className: "h-[200px]",
                            children: J.map((e, s) => (0, t.jsxs)("div", {
                                className: "mb-4",
                                children: [(0, t.jsx)("h3", {
                                    className: "font-semibold",
                                    children: e.title
                                }), (0, t.jsx)("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: e.date
                                })]
                            }, s))
                        })
                    })]
                })
            }

            function X() {
                let [e, s] = (0, a.useState)(""), [r, n] = (0, a.useState)([]), [l, c] = (0, a.useState)([]), [d, o] = (0, a.useState)("ask"), [x, b] = (0, a.useState)(!1), [C, A] = (0, a.useState)(!0), [z, E] = (0, a.useState)(null), {
                    complete: W,
                    completion: K,
                    isLoading: J,
                    error: X
                } = (0, i.GO)({
                    api: "/api/legal-qa",
                    onResponse: e => {
                        if (!e.ok) throw Error("API error: ".concat(e.status, " ").concat(e.statusText))
                    },
                    onError: e => {
                        console.error("Completion Error:", e), E(e.message || "An unexpected error occurred")
                    },
                    onFinish: (e, s) => {
                        console.log("Completion finished:", s), n(r => [...r, {
                            question: e,
                            answer: s
                        }])
                    }
                });
                (0, a.useEffect)(() => {
                    (async () => {
                        try {
                            let e = await fetch("/api/check-api-key"),
                                s = await e.json();
                            A(s.isSet)
                        } catch (e) {
                            console.error("Error checking API key:", e), A(!1)
                        }
                    })()
                }, []);
                let $ = async e => {
                        await navigator.clipboard.writeText(e), b(!0), setTimeout(() => b(!1), 2e3)
                    },
                    ee = e => {
                        c(s => [...s, e])
                    };
                return C ? (0, t.jsxs)("div", {
                    className: "min-h-screen bg-background",
                    children: [(0, t.jsx)("header", {
                        className: "border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50",
                        children: (0, t.jsxs)("div", {
                            className: "container mx-auto px-4 h-16 flex items-center justify-between",
                            children: [(0, t.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [(0, t.jsx)(q.Z, {
                                    className: "h-6 w-6 text-primary"
                                }), (0, t.jsx)("span", {
                                    className: "font-semibold text-xl",
                                    children: "LegalAI Assistant"
                                })]
                            }), (0, t.jsxs)("nav", {
                                className: "flex items-center space-x-4",
                                children: [(0, t.jsx)(u, {
                                    variant: "ghost",
                                    size: "sm",
                                    children: "Documentation"
                                }), (0, t.jsx)(u, {
                                    variant: "ghost",
                                    size: "sm",
                                    children: "Contact"
                                }), (0, t.jsx)(u, {
                                    size: "sm",
                                    children: "Sign Up"
                                })]
                            })]
                        })
                    }), (0, t.jsx)("main", {
                        className: "container mx-auto px-4 py-10",
                        children: (0, t.jsxs)("div", {
                            className: "grid lg:grid-cols-[1fr,300px] gap-8",
                            children: [(0, t.jsxs)("div", {
                                className: "space-y-8",
                                children: [(0, t.jsxs)("div", {
                                    className: "text-center space-y-4",
                                    children: [(0, t.jsx)("h1", {
                                        className: "text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text",
                                        children: "Legal Question Assistant"
                                    }), (0, t.jsx)("p", {
                                        className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                                        children: "Get expert legal insights powered by advanced AI technology. Ask any legal question and receive comprehensive, accurate answers."
                                    })]
                                }), (0, t.jsxs)(N, {
                                    value: d,
                                    onValueChange: o,
                                    className: "space-y-4",
                                    children: [(0, t.jsxs)(y, {
                                        className: "grid w-full grid-cols-3",
                                        children: [(0, t.jsx)(w, {
                                            value: "ask",
                                            children: "Ask Question"
                                        }), (0, t.jsx)(w, {
                                            value: "history",
                                            children: "History"
                                        }), (0, t.jsx)(w, {
                                            value: "saved",
                                            children: "Saved Items"
                                        })]
                                    }), (0, t.jsxs)(k, {
                                        value: "ask",
                                        className: "space-y-4",
                                        children: [(0, t.jsx)(h, {
                                            children: (0, t.jsx)(j, {
                                                className: "pt-6",
                                                children: (0, t.jsxs)("form", {
                                                    onSubmit: s => {
                                                        s.preventDefault(), E(null), console.log("Submitting question:", e), W(e)
                                                    },
                                                    className: "space-y-4",
                                                    children: [(0, t.jsx)(m, {
                                                        placeholder: "Enter your legal question here...",
                                                        value: e,
                                                        onChange: e => s(e.target.value),
                                                        className: "min-h-[120px] text-lg resize-none"
                                                    }), (0, t.jsxs)("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [(0, t.jsxs)("div", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: [e.length, " characters"]
                                                        }), (0, t.jsx)(u, {
                                                            type: "submit",
                                                            size: "lg",
                                                            disabled: J || "" === e.trim(),
                                                            children: J ? (0, t.jsxs)(t.Fragment, {
                                                                children: [(0, t.jsx)(P.Z, {
                                                                    className: "mr-2 h-5 w-5 animate-spin"
                                                                }), "Analyzing..."]
                                                            }) : (0, t.jsxs)(t.Fragment, {
                                                                children: ["Get Legal Answer", (0, t.jsx)(I.Z, {
                                                                    className: "ml-2 h-4 w-4"
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        }), J && (0, t.jsx)(h, {
                                            children: (0, t.jsxs)(j, {
                                                className: "flex items-center justify-center py-6",
                                                children: [(0, t.jsx)(P.Z, {
                                                    className: "h-6 w-6 animate-spin"
                                                }), (0, t.jsx)("span", {
                                                    className: "ml-2",
                                                    children: "Generating legal answer..."
                                                })]
                                            })
                                        }), z && (0, t.jsxs)(Z, {
                                            variant: "destructive",
                                            children: [(0, t.jsx)(_.Z, {
                                                className: "h-4 w-4"
                                            }), (0, t.jsx)(T, {
                                                children: "Error"
                                            }), (0, t.jsxs)(L, {
                                                children: [z, (0, t.jsxs)("details", {
                                                    className: "mt-2",
                                                    children: [(0, t.jsx)("summary", {
                                                        children: "Technical details"
                                                    }), (0, t.jsx)("pre", {
                                                        className: "mt-2 w-full overflow-auto text-xs",
                                                        children: JSON.stringify(X, null, 2)
                                                    })]
                                                })]
                                            })]
                                        }), K && (0, t.jsxs)(h, {
                                            className: "border-2",
                                            children: [(0, t.jsxs)(f, {
                                                children: [(0, t.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [(0, t.jsxs)(p, {
                                                        className: "flex items-center gap-2",
                                                        children: [(0, t.jsx)(V.Z, {
                                                            className: "h-5 w-5"
                                                        }), "Legal Analysis"]
                                                    }), (0, t.jsxs)("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [(0, t.jsx)(u, {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            onClick: () => $(K),
                                                            children: x ? "Copied!" : (0, t.jsx)(H.Z, {
                                                                className: "h-4 w-4"
                                                            })
                                                        }), (0, t.jsx)(u, {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            children: (0, t.jsx)(O.Z, {
                                                                className: "h-4 w-4"
                                                            })
                                                        }), (0, t.jsx)(u, {
                                                            variant: "ghost",
                                                            size: "sm",
                                                            onClick: () => ee({
                                                                question: e,
                                                                answer: K
                                                            }),
                                                            children: (0, t.jsx)(Q.Z, {
                                                                className: "h-4 w-4"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, t.jsx)(g, {
                                                    children: "Based on comprehensive legal knowledge"
                                                })]
                                            }), (0, t.jsx)(j, {
                                                children: (0, t.jsx)("div", {
                                                    className: "prose prose-gray dark:prose-invert max-w-none",
                                                    children: (0, t.jsx)("p", {
                                                        className: "whitespace-pre-wrap text-lg",
                                                        children: K
                                                    })
                                                })
                                            }), (0, t.jsxs)(v, {
                                                className: "flex items-center justify-between border-t pt-4",
                                                children: [(0, t.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0, t.jsxs)(u, {
                                                        variant: "outline",
                                                        size: "sm",
                                                        children: [(0, t.jsx)(D.Z, {
                                                            className: "h-4 w-4 mr-1"
                                                        }), "Helpful"]
                                                    }), (0, t.jsxs)(u, {
                                                        variant: "outline",
                                                        size: "sm",
                                                        children: [(0, t.jsx)(F.Z, {
                                                            className: "h-4 w-4 mr-1"
                                                        }), "Not Helpful"]
                                                    })]
                                                }), (0, t.jsxs)(u, {
                                                    variant: "ghost",
                                                    size: "sm",
                                                    children: [(0, t.jsx)(G.Z, {
                                                        className: "h-4 w-4 mr-1"
                                                    }), "Feedback"]
                                                })]
                                            })]
                                        })]
                                    }), (0, t.jsx)(k, {
                                        value: "history",
                                        children: (0, t.jsxs)(h, {
                                            children: [(0, t.jsxs)(f, {
                                                children: [(0, t.jsx)(p, {
                                                    children: "Question History"
                                                }), (0, t.jsx)(g, {
                                                    children: "Your previous legal inquiries"
                                                })]
                                            }), (0, t.jsx)(j, {
                                                children: (0, t.jsx)(R, {
                                                    className: "h-[500px] pr-4",
                                                    children: 0 === r.length ? (0, t.jsx)("div", {
                                                        className: "text-center text-muted-foreground py-8",
                                                        children: "No questions asked yet"
                                                    }) : (0, t.jsx)("div", {
                                                        className: "space-y-4",
                                                        children: r.map((e, s) => (0, t.jsxs)(h, {
                                                            children: [(0, t.jsx)(f, {
                                                                children: (0, t.jsxs)(p, {
                                                                    className: "text-sm font-medium",
                                                                    children: ["Q: ", e.question]
                                                                })
                                                            }), (0, t.jsx)(j, {
                                                                children: (0, t.jsxs)("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [e.answer.substring(0, 150), "..."]
                                                                })
                                                            })]
                                                        }, s))
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, t.jsx)(k, {
                                        value: "saved",
                                        children: (0, t.jsxs)(h, {
                                            children: [(0, t.jsxs)(f, {
                                                children: [(0, t.jsx)(p, {
                                                    children: "Saved Items"
                                                }), (0, t.jsx)(g, {
                                                    children: "Questions and answers you've saved for later"
                                                })]
                                            }), (0, t.jsx)(j, {
                                                children: (0, t.jsx)(R, {
                                                    className: "h-[500px] pr-4",
                                                    children: 0 === l.length ? (0, t.jsx)("div", {
                                                        className: "text-center text-muted-foreground py-8",
                                                        children: "No items saved yet"
                                                    }) : (0, t.jsx)("div", {
                                                        className: "space-y-4",
                                                        children: l.map((e, s) => (0, t.jsxs)(h, {
                                                            children: [(0, t.jsx)(f, {
                                                                children: (0, t.jsxs)(p, {
                                                                    className: "text-sm font-medium",
                                                                    children: ["Q: ", e.question]
                                                                })
                                                            }), (0, t.jsx)(j, {
                                                                children: (0, t.jsxs)("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [e.answer.substring(0, 150), "..."]
                                                                })
                                                            })]
                                                        }, s))
                                                    })
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "space-y-6",
                                children: [(0, t.jsxs)(h, {
                                    children: [(0, t.jsxs)(f, {
                                        children: [(0, t.jsx)(p, {
                                            children: "Suggested Questions"
                                        }), (0, t.jsx)(g, {
                                            children: "Popular legal topics"
                                        })]
                                    }), (0, t.jsx)(j, {
                                        children: (0, t.jsx)("div", {
                                            className: "space-y-2",
                                            children: ["What are the key elements of a valid contract?", "Explain the concept of intellectual property rights.", "What is the difference between civil and criminal law?", "How does employment law protect workers' rights?"].map((e, r) => (0, t.jsx)(u, {
                                                variant: "ghost",
                                                className: "w-full justify-start text-left h-auto p-2",
                                                onClick: () => {
                                                    s(e), o("ask")
                                                },
                                                children: e
                                            }, r))
                                        })
                                    })]
                                }), (0, t.jsx)(M, {}), (0, t.jsx)(U, {}), (0, t.jsxs)(h, {
                                    children: [(0, t.jsx)(f, {
                                        children: (0, t.jsx)(p, {
                                            children: "Features"
                                        })
                                    }), (0, t.jsxs)(j, {
                                        className: "grid gap-4",
                                        children: [(0, t.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, t.jsx)(S, {
                                                variant: "outline",
                                                className: "w-8 h-8 flex items-center justify-center p-0",
                                                children: (0, t.jsx)(q.Z, {
                                                    className: "h-4 w-4"
                                                })
                                            }), (0, t.jsxs)("div", {
                                                className: "space-y-1",
                                                children: [(0, t.jsx)("p", {
                                                    className: "text-sm font-medium",
                                                    children: "Legal Expertise"
                                                }), (0, t.jsx)("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Powered by advanced AI models"
                                                })]
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, t.jsx)(S, {
                                                variant: "outline",
                                                className: "w-8 h-8 flex items-center justify-center p-0",
                                                children: (0, t.jsx)(Y.Z, {
                                                    className: "h-4 w-4"
                                                })
                                            }), (0, t.jsxs)("div", {
                                                className: "space-y-1",
                                                children: [(0, t.jsx)("p", {
                                                    className: "text-sm font-medium",
                                                    children: "Comprehensive"
                                                }), (0, t.jsx)("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Based on extensive legal documents"
                                                })]
                                            })]
                                        }), (0, t.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, t.jsx)(S, {
                                                variant: "outline",
                                                className: "w-8 h-8 flex items-center justify-center p-0",
                                                children: (0, t.jsx)(B.Z, {
                                                    className: "h-4 w-4"
                                                })
                                            }), (0, t.jsxs)("div", {
                                                className: "space-y-1",
                                                children: [(0, t.jsx)("p", {
                                                    className: "text-sm font-medium",
                                                    children: "History Tracking"
                                                }), (0, t.jsx)("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: "Save and review past questions"
                                                })]
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })]
                }) : (0, t.jsx)("div", {
                    className: "min-h-screen bg-background flex items-center justify-center",
                    children: (0, t.jsxs)(Z, {
                        variant: "destructive",
                        className: "max-w-md",
                        children: [(0, t.jsx)(_.Z, {
                            className: "h-4 w-4"
                        }), (0, t.jsx)(T, {
                            children: "API Key Not Set"
                        }), (0, t.jsx)(L, {
                            children: "The GOOGLE_API_KEY environment variable is not set. Please set it in your Vercel project settings and redeploy."
                        })]
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [292, 971, 117, 744], function() {
            return e(e.s = 1538)
        }), _N_E = e.O()
    }
]);