// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package bench

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// BenchmarkQueueClient is the client API for BenchmarkQueue service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BenchmarkQueueClient interface {
	ReceiveBenchmarkJob(ctx context.Context, in *ReceiveBenchmarkJobRequest, opts ...grpc.CallOption) (*ReceiveBenchmarkJobResponse, error)
	CancelOwnedBenchmarkJob(ctx context.Context, in *CancelOwnedBenchmarkJobRequest, opts ...grpc.CallOption) (*CancelOwnedBenchmarkJobResponse, error)
}

type benchmarkQueueClient struct {
	cc grpc.ClientConnInterface
}

func NewBenchmarkQueueClient(cc grpc.ClientConnInterface) BenchmarkQueueClient {
	return &benchmarkQueueClient{cc}
}

var benchmarkQueueReceiveBenchmarkJobStreamDesc = &grpc.StreamDesc{
	StreamName: "ReceiveBenchmarkJob",
}

func (c *benchmarkQueueClient) ReceiveBenchmarkJob(ctx context.Context, in *ReceiveBenchmarkJobRequest, opts ...grpc.CallOption) (*ReceiveBenchmarkJobResponse, error) {
	out := new(ReceiveBenchmarkJobResponse)
	err := c.cc.Invoke(ctx, "/isuxportal.proto.services.bench.BenchmarkQueue/ReceiveBenchmarkJob", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

var benchmarkQueueCancelOwnedBenchmarkJobStreamDesc = &grpc.StreamDesc{
	StreamName: "CancelOwnedBenchmarkJob",
}

func (c *benchmarkQueueClient) CancelOwnedBenchmarkJob(ctx context.Context, in *CancelOwnedBenchmarkJobRequest, opts ...grpc.CallOption) (*CancelOwnedBenchmarkJobResponse, error) {
	out := new(CancelOwnedBenchmarkJobResponse)
	err := c.cc.Invoke(ctx, "/isuxportal.proto.services.bench.BenchmarkQueue/CancelOwnedBenchmarkJob", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BenchmarkQueueService is the service API for BenchmarkQueue service.
// Fields should be assigned to their respective handler implementations only before
// RegisterBenchmarkQueueService is called.  Any unassigned fields will result in the
// handler for that method returning an Unimplemented error.
type BenchmarkQueueService struct {
	ReceiveBenchmarkJob     func(context.Context, *ReceiveBenchmarkJobRequest) (*ReceiveBenchmarkJobResponse, error)
	CancelOwnedBenchmarkJob func(context.Context, *CancelOwnedBenchmarkJobRequest) (*CancelOwnedBenchmarkJobResponse, error)
}

func (s *BenchmarkQueueService) receiveBenchmarkJob(_ interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReceiveBenchmarkJobRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return s.ReceiveBenchmarkJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     s,
		FullMethod: "/isuxportal.proto.services.bench.BenchmarkQueue/ReceiveBenchmarkJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return s.ReceiveBenchmarkJob(ctx, req.(*ReceiveBenchmarkJobRequest))
	}
	return interceptor(ctx, in, info, handler)
}
func (s *BenchmarkQueueService) cancelOwnedBenchmarkJob(_ interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CancelOwnedBenchmarkJobRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return s.CancelOwnedBenchmarkJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     s,
		FullMethod: "/isuxportal.proto.services.bench.BenchmarkQueue/CancelOwnedBenchmarkJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return s.CancelOwnedBenchmarkJob(ctx, req.(*CancelOwnedBenchmarkJobRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// RegisterBenchmarkQueueService registers a service implementation with a gRPC server.
func RegisterBenchmarkQueueService(s grpc.ServiceRegistrar, srv *BenchmarkQueueService) {
	srvCopy := *srv
	if srvCopy.ReceiveBenchmarkJob == nil {
		srvCopy.ReceiveBenchmarkJob = func(context.Context, *ReceiveBenchmarkJobRequest) (*ReceiveBenchmarkJobResponse, error) {
			return nil, status.Errorf(codes.Unimplemented, "method ReceiveBenchmarkJob not implemented")
		}
	}
	if srvCopy.CancelOwnedBenchmarkJob == nil {
		srvCopy.CancelOwnedBenchmarkJob = func(context.Context, *CancelOwnedBenchmarkJobRequest) (*CancelOwnedBenchmarkJobResponse, error) {
			return nil, status.Errorf(codes.Unimplemented, "method CancelOwnedBenchmarkJob not implemented")
		}
	}
	sd := grpc.ServiceDesc{
		ServiceName: "isuxportal.proto.services.bench.BenchmarkQueue",
		Methods: []grpc.MethodDesc{
			{
				MethodName: "ReceiveBenchmarkJob",
				Handler:    srvCopy.receiveBenchmarkJob,
			},
			{
				MethodName: "CancelOwnedBenchmarkJob",
				Handler:    srvCopy.cancelOwnedBenchmarkJob,
			},
		},
		Streams:  []grpc.StreamDesc{},
		Metadata: "isuxportal/services/bench/receiving.proto",
	}

	s.RegisterService(&sd, nil)
}

// NewBenchmarkQueueService creates a new BenchmarkQueueService containing the
// implemented methods of the BenchmarkQueue service in s.  Any unimplemented
// methods will result in the gRPC server returning an UNIMPLEMENTED status to the client.
// This includes situations where the method handler is misspelled or has the wrong
// signature.  For this reason, this function should be used with great care and
// is not recommended to be used by most users.
func NewBenchmarkQueueService(s interface{}) *BenchmarkQueueService {
	ns := &BenchmarkQueueService{}
	if h, ok := s.(interface {
		ReceiveBenchmarkJob(context.Context, *ReceiveBenchmarkJobRequest) (*ReceiveBenchmarkJobResponse, error)
	}); ok {
		ns.ReceiveBenchmarkJob = h.ReceiveBenchmarkJob
	}
	if h, ok := s.(interface {
		CancelOwnedBenchmarkJob(context.Context, *CancelOwnedBenchmarkJobRequest) (*CancelOwnedBenchmarkJobResponse, error)
	}); ok {
		ns.CancelOwnedBenchmarkJob = h.CancelOwnedBenchmarkJob
	}
	return ns
}

// UnstableBenchmarkQueueService is the service API for BenchmarkQueue service.
// New methods may be added to this interface if they are added to the service
// definition, which is not a backward-compatible change.  For this reason,
// use of this type is not recommended.
type UnstableBenchmarkQueueService interface {
	ReceiveBenchmarkJob(context.Context, *ReceiveBenchmarkJobRequest) (*ReceiveBenchmarkJobResponse, error)
	CancelOwnedBenchmarkJob(context.Context, *CancelOwnedBenchmarkJobRequest) (*CancelOwnedBenchmarkJobResponse, error)
}
