/* Copyright Contributors to the Open Cluster Management project */
import { Namespace, NamespaceApiVersion, NamespaceKind } from '../../../resources'

export const mockLocalClusterNamespace: Namespace = {
    apiVersion: NamespaceApiVersion,
    kind: NamespaceKind,
    metadata: {
        name: 'default',
    },
}
