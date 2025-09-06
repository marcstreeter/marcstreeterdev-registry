# Registry service Tiltfile (development only)
load('ext://configmap', 'configmap_from_dict')
load('ext://dotenv', 'dotenv')

# CONSTANTS
DOTENV = dotenv() or {}
SYSENV = dict(os.environ)
HOST_PORT = 18080
CONTAINER_PORT = 3000

# FUNCTIONS
def get_env_var(key, default=""):
    """Get environment variable with priority: dotenv > system env > default"""
    return DOTENV.get(key, SYSENV.get(key, default))

# BUILD
docker_build(
    'registry-app',
    '.',
    dockerfile='Dockerfile',
    live_update=[
        sync('./app', '/app/app'),
        sync('./components', '/app/components'),
        sync('./lib', '/app/lib'),
        sync('./registry', '/app/registry'),
        sync('./public', '/app/public'),
        sync('./package.json', '/app/package.json'),
        sync('./next.config.ts', '/app/next.config.ts'),
        sync('./tsconfig.json', '/app/tsconfig.json'),
        sync('./tailwind.config.js', '/app/tailwind.config.js'),
        sync('./postcss.config.mjs', '/app/postcss.config.mjs'),
    ]
)

# MANIFESTS
k8s_yaml(
    configmap_from_dict(
        'marcstreeterdev-registry-config',
        inputs={
            'NODE_ENV': get_env_var('NODE_ENV', 'development'),
            'NEXT_PUBLIC_APP_URL': get_env_var('NEXT_PUBLIC_APP_URL', 'http://localhost:{}'.format(HOST_PORT)),
            'NEXT_TELEMETRY_DISABLED': get_env_var('NEXT_TELEMETRY_DISABLED', '1'),
        }
    )
)
k8s_yaml(
    helm(
        'manifests',
        values=['manifests/values.yaml']
    )
)

# RESOURCES
k8s_resource(
    'marcstreeterdev-registry',
    resource_deps=[],
    labels=['registry'],
    port_forwards=[
        port_forward(HOST_PORT, CONTAINER_PORT, name="registry"),
    ],
)
