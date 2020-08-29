#!/bin/bash
export ISUXPORTAL_SUPERVISOR_ENDPOINT_URL=http://localhost:4000
export ISUXPORTAL_SUPERVISOR_TOKEN=token
export RUST_LOG=${RUST_LOG:-"info,isuxportal_supervisor=trace"}
exec cargo run