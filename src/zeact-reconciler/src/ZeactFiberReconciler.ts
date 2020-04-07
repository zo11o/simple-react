const NoWork = 0;
const noTimeout = 0;

export function createFiberRoot(containerInfo: any, isConcurrent: boolean, hydrate = false) {
    const uninitializedFiber = {}
    let root;

    root = {
        current: uninitializedFiber, //
        containerInfo: containerInfo,
        pendingChildren: null,

        earliestPendingTime: NoWork,
        latestPendingTime: NoWork,
        earliestSuspendedTime: NoWork,
        latestSuspendedTime: NoWork,
        latestPingedTime: NoWork,

        pingCache: null,

        didError: false,

        pendingCommitExpirationTime: NoWork,
        finishedWork: null,
        timeoutHandle: noTimeout, //
        context: null,
        pendingContext: null,
        hydrate,
        nextExpirationTimeToWorkOn: NoWork,
        expirationTime: NoWork,
        firstBatch: null,
        nextScheduledRoot: null,

        // interactionThreadID: unstable_getThreadID(),
        memoizedInteractions: new Set(),
        pendingInteractionMap: new Map(),
    }
    return root;
}

export function createContainer(
    containerInfo: any,
    isConcurrent: boolean,
    hydrate = false
) {
    return createFiberRoot(containerInfo, isConcurrent, hydrate,)
}