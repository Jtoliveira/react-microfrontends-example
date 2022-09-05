import React, {Suspense} from "react";

import SafeComponent from "./SafeComponent";

const RemotePage = React.lazy( () => import('remote/RemotePage'))

export default function SafeRemoteComponent() {
    return(
        <SafeComponent>
            <Suspense fallback={<div>Loading...</div>}>
                <RemotePage />
            </Suspense>
        </SafeComponent>
    );
}