# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/services/admin/clarifications.proto

require 'google/protobuf'

require 'isuxportal/resources/clarification_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/services/admin/clarifications.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.services.admin.ListClarificationsRequest" do
      optional :team_id, :int64, 1
    end
    add_message "isuxportal.proto.services.admin.ListClarificationsResponse" do
      repeated :clarifications, :message, 1, "isuxportal.proto.resources.Clarification"
    end
    add_message "isuxportal.proto.services.admin.GetClarificationRequest" do
      optional :id, :int64, 1
    end
    add_message "isuxportal.proto.services.admin.GetClarificationResponse" do
      optional :clarification, :message, 1, "isuxportal.proto.resources.Clarification"
    end
    add_message "isuxportal.proto.services.admin.RespondClarificationRequest" do
      optional :id, :int64, 1
      optional :disclose, :bool, 2
      optional :answer, :string, 3
      optional :question, :string, 4
    end
    add_message "isuxportal.proto.services.admin.RespondClarificationResponse" do
      optional :clarification, :message, 1, "isuxportal.proto.resources.Clarification"
    end
    add_message "isuxportal.proto.services.admin.CreateClarificationRequest" do
      optional :id, :int64, 1
      optional :answer, :string, 2
      optional :question, :string, 3
    end
    add_message "isuxportal.proto.services.admin.CreateClarificationResponse" do
      optional :clarification, :message, 1, "isuxportal.proto.resources.Clarification"
    end
  end
end

module Isuxportal
  module Proto
    module Services
      module Admin
        ListClarificationsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.ListClarificationsRequest").msgclass
        ListClarificationsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.ListClarificationsResponse").msgclass
        GetClarificationRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.GetClarificationRequest").msgclass
        GetClarificationResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.GetClarificationResponse").msgclass
        RespondClarificationRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.RespondClarificationRequest").msgclass
        RespondClarificationResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.RespondClarificationResponse").msgclass
        CreateClarificationRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.CreateClarificationRequest").msgclass
        CreateClarificationResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.admin.CreateClarificationResponse").msgclass
      end
    end
  end
end
