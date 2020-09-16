// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.12.4
// source: isuxportal/services/contestant/benchmark.proto

package contestant

import (
	proto "github.com/golang/protobuf/proto"
	resources "github.com/isucon/isucon10-portal/proto.go/isuxportal/resources"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type ListBenchmarkJobsQuery struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Limit int64 `protobuf:"varint,1,opt,name=limit,proto3" json:"limit,omitempty"`
}

func (x *ListBenchmarkJobsQuery) Reset() {
	*x = ListBenchmarkJobsQuery{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListBenchmarkJobsQuery) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListBenchmarkJobsQuery) ProtoMessage() {}

func (x *ListBenchmarkJobsQuery) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListBenchmarkJobsQuery.ProtoReflect.Descriptor instead.
func (*ListBenchmarkJobsQuery) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_contestant_benchmark_proto_rawDescGZIP(), []int{0}
}

func (x *ListBenchmarkJobsQuery) GetLimit() int64 {
	if x != nil {
		return x.Limit
	}
	return 0
}

type ListBenchmarkJobsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Jobs []*resources.BenchmarkJob `protobuf:"bytes,1,rep,name=jobs,proto3" json:"jobs,omitempty"`
}

func (x *ListBenchmarkJobsResponse) Reset() {
	*x = ListBenchmarkJobsResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListBenchmarkJobsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListBenchmarkJobsResponse) ProtoMessage() {}

func (x *ListBenchmarkJobsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListBenchmarkJobsResponse.ProtoReflect.Descriptor instead.
func (*ListBenchmarkJobsResponse) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_contestant_benchmark_proto_rawDescGZIP(), []int{1}
}

func (x *ListBenchmarkJobsResponse) GetJobs() []*resources.BenchmarkJob {
	if x != nil {
		return x.Jobs
	}
	return nil
}

type EnqueueBenchmarkJobRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// target ContestantInstance id
	TargetId int64 `protobuf:"varint,1,opt,name=target_id,json=targetId,proto3" json:"target_id,omitempty"`
}

func (x *EnqueueBenchmarkJobRequest) Reset() {
	*x = EnqueueBenchmarkJobRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EnqueueBenchmarkJobRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EnqueueBenchmarkJobRequest) ProtoMessage() {}

func (x *EnqueueBenchmarkJobRequest) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EnqueueBenchmarkJobRequest.ProtoReflect.Descriptor instead.
func (*EnqueueBenchmarkJobRequest) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_contestant_benchmark_proto_rawDescGZIP(), []int{2}
}

func (x *EnqueueBenchmarkJobRequest) GetTargetId() int64 {
	if x != nil {
		return x.TargetId
	}
	return 0
}

type EnqueueBenchmarkJobResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Job *resources.BenchmarkJob `protobuf:"bytes,1,opt,name=job,proto3" json:"job,omitempty"`
}

func (x *EnqueueBenchmarkJobResponse) Reset() {
	*x = EnqueueBenchmarkJobResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *EnqueueBenchmarkJobResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*EnqueueBenchmarkJobResponse) ProtoMessage() {}

func (x *EnqueueBenchmarkJobResponse) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use EnqueueBenchmarkJobResponse.ProtoReflect.Descriptor instead.
func (*EnqueueBenchmarkJobResponse) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_contestant_benchmark_proto_rawDescGZIP(), []int{3}
}

func (x *EnqueueBenchmarkJobResponse) GetJob() *resources.BenchmarkJob {
	if x != nil {
		return x.Job
	}
	return nil
}

// Query parameter
type GetBenchmarkJobQuery struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetBenchmarkJobQuery) Reset() {
	*x = GetBenchmarkJobQuery{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetBenchmarkJobQuery) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetBenchmarkJobQuery) ProtoMessage() {}

func (x *GetBenchmarkJobQuery) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetBenchmarkJobQuery.ProtoReflect.Descriptor instead.
func (*GetBenchmarkJobQuery) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_contestant_benchmark_proto_rawDescGZIP(), []int{4}
}

func (x *GetBenchmarkJobQuery) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type GetBenchmarkJobResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Job *resources.BenchmarkJob `protobuf:"bytes,1,opt,name=job,proto3" json:"job,omitempty"`
}

func (x *GetBenchmarkJobResponse) Reset() {
	*x = GetBenchmarkJobResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetBenchmarkJobResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetBenchmarkJobResponse) ProtoMessage() {}

func (x *GetBenchmarkJobResponse) ProtoReflect() protoreflect.Message {
	mi := &file_isuxportal_services_contestant_benchmark_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetBenchmarkJobResponse.ProtoReflect.Descriptor instead.
func (*GetBenchmarkJobResponse) Descriptor() ([]byte, []int) {
	return file_isuxportal_services_contestant_benchmark_proto_rawDescGZIP(), []int{5}
}

func (x *GetBenchmarkJobResponse) GetJob() *resources.BenchmarkJob {
	if x != nil {
		return x.Job
	}
	return nil
}

var File_isuxportal_services_contestant_benchmark_proto protoreflect.FileDescriptor

var file_isuxportal_services_contestant_benchmark_proto_rawDesc = []byte{
	0x0a, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x73, 0x74, 0x61, 0x6e, 0x74,
	0x2f, 0x62, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x24, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x63, 0x6f, 0x6e, 0x74,
	0x65, 0x73, 0x74, 0x61, 0x6e, 0x74, 0x1a, 0x28, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74,
	0x61, 0x6c, 0x2f, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2f, 0x62, 0x65, 0x6e,
	0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x5f, 0x6a, 0x6f, 0x62, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x2e, 0x0a, 0x16, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72,
	0x6b, 0x4a, 0x6f, 0x62, 0x73, 0x51, 0x75, 0x65, 0x72, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69,
	0x6d, 0x69, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74,
	0x22, 0x59, 0x0a, 0x19, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72,
	0x6b, 0x4a, 0x6f, 0x62, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3c, 0x0a,
	0x04, 0x6a, 0x6f, 0x62, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x69, 0x73,
	0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72,
	0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2e, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61,
	0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x52, 0x04, 0x6a, 0x6f, 0x62, 0x73, 0x22, 0x39, 0x0a, 0x1a, 0x45,
	0x6e, 0x71, 0x75, 0x65, 0x75, 0x65, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a,
	0x6f, 0x62, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x61, 0x72,
	0x67, 0x65, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x74, 0x61,
	0x72, 0x67, 0x65, 0x74, 0x49, 0x64, 0x22, 0x59, 0x0a, 0x1b, 0x45, 0x6e, 0x71, 0x75, 0x65, 0x75,
	0x65, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3a, 0x0a, 0x03, 0x6a, 0x6f, 0x62, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x28, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2e,
	0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x52, 0x03, 0x6a, 0x6f,
	0x62, 0x22, 0x26, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72,
	0x6b, 0x4a, 0x6f, 0x62, 0x51, 0x75, 0x65, 0x72, 0x79, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x22, 0x55, 0x0a, 0x17, 0x47, 0x65, 0x74,
	0x42, 0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3a, 0x0a, 0x03, 0x6a, 0x6f, 0x62, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x28, 0x2e, 0x69, 0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x72, 0x65, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2e, 0x42,
	0x65, 0x6e, 0x63, 0x68, 0x6d, 0x61, 0x72, 0x6b, 0x4a, 0x6f, 0x62, 0x52, 0x03, 0x6a, 0x6f, 0x62,
	0x42, 0x4b, 0x5a, 0x49, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x69,
	0x73, 0x75, 0x63, 0x6f, 0x6e, 0x2f, 0x69, 0x73, 0x75, 0x63, 0x6f, 0x6e, 0x31, 0x30, 0x2d, 0x70,
	0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x67, 0x6f, 0x2f, 0x69,
	0x73, 0x75, 0x78, 0x70, 0x6f, 0x72, 0x74, 0x61, 0x6c, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x65, 0x73, 0x74, 0x61, 0x6e, 0x74, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_isuxportal_services_contestant_benchmark_proto_rawDescOnce sync.Once
	file_isuxportal_services_contestant_benchmark_proto_rawDescData = file_isuxportal_services_contestant_benchmark_proto_rawDesc
)

func file_isuxportal_services_contestant_benchmark_proto_rawDescGZIP() []byte {
	file_isuxportal_services_contestant_benchmark_proto_rawDescOnce.Do(func() {
		file_isuxportal_services_contestant_benchmark_proto_rawDescData = protoimpl.X.CompressGZIP(file_isuxportal_services_contestant_benchmark_proto_rawDescData)
	})
	return file_isuxportal_services_contestant_benchmark_proto_rawDescData
}

var file_isuxportal_services_contestant_benchmark_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_isuxportal_services_contestant_benchmark_proto_goTypes = []interface{}{
	(*ListBenchmarkJobsQuery)(nil),      // 0: isuxportal.proto.services.contestant.ListBenchmarkJobsQuery
	(*ListBenchmarkJobsResponse)(nil),   // 1: isuxportal.proto.services.contestant.ListBenchmarkJobsResponse
	(*EnqueueBenchmarkJobRequest)(nil),  // 2: isuxportal.proto.services.contestant.EnqueueBenchmarkJobRequest
	(*EnqueueBenchmarkJobResponse)(nil), // 3: isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse
	(*GetBenchmarkJobQuery)(nil),        // 4: isuxportal.proto.services.contestant.GetBenchmarkJobQuery
	(*GetBenchmarkJobResponse)(nil),     // 5: isuxportal.proto.services.contestant.GetBenchmarkJobResponse
	(*resources.BenchmarkJob)(nil),      // 6: isuxportal.proto.resources.BenchmarkJob
}
var file_isuxportal_services_contestant_benchmark_proto_depIdxs = []int32{
	6, // 0: isuxportal.proto.services.contestant.ListBenchmarkJobsResponse.jobs:type_name -> isuxportal.proto.resources.BenchmarkJob
	6, // 1: isuxportal.proto.services.contestant.EnqueueBenchmarkJobResponse.job:type_name -> isuxportal.proto.resources.BenchmarkJob
	6, // 2: isuxportal.proto.services.contestant.GetBenchmarkJobResponse.job:type_name -> isuxportal.proto.resources.BenchmarkJob
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_isuxportal_services_contestant_benchmark_proto_init() }
func file_isuxportal_services_contestant_benchmark_proto_init() {
	if File_isuxportal_services_contestant_benchmark_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_isuxportal_services_contestant_benchmark_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListBenchmarkJobsQuery); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_isuxportal_services_contestant_benchmark_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListBenchmarkJobsResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_isuxportal_services_contestant_benchmark_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EnqueueBenchmarkJobRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_isuxportal_services_contestant_benchmark_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*EnqueueBenchmarkJobResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_isuxportal_services_contestant_benchmark_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetBenchmarkJobQuery); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_isuxportal_services_contestant_benchmark_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetBenchmarkJobResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_isuxportal_services_contestant_benchmark_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_isuxportal_services_contestant_benchmark_proto_goTypes,
		DependencyIndexes: file_isuxportal_services_contestant_benchmark_proto_depIdxs,
		MessageInfos:      file_isuxportal_services_contestant_benchmark_proto_msgTypes,
	}.Build()
	File_isuxportal_services_contestant_benchmark_proto = out.File
	file_isuxportal_services_contestant_benchmark_proto_rawDesc = nil
	file_isuxportal_services_contestant_benchmark_proto_goTypes = nil
	file_isuxportal_services_contestant_benchmark_proto_depIdxs = nil
}
