local utils = import './utils.libsonnet';

{
  container(appId, appPort='4000'): {
    cpu: 64,
    memory: 64,
    image_tag: 'sorah/infra-hako-front-envoy:a11af1f8d4bab5a4f4be09c2cc177c160cdec44d',
    log_configuration: utils.awsLogs('front_envoy'),
    env: {
      APP_ID: appId,
      ADDRESS: '127.0.0.1',
      PORT: appPort,
      HTTP2: '1',
      ENVOY_CONCURRENCY: '1',
    },
    port_mappings: [
      {
        container_port: '8000',
        host_port: 8000,
        protocol: 'tcp',
      },
    ],
  },
}
