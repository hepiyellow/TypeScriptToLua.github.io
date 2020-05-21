import Layout from "@theme/Layout";
import React from "react";
import Benchmark from "./Benchmark";

export default function CreateBenchmark() {
    const isSSR = typeof window === "undefined";
    return (
        <Layout title="Benchmark">
            {!isSSR && (
                <React.Suspense fallback={<div />}>
                    <Benchmark />
                </React.Suspense>
            )}
        </Layout>
    );
}
