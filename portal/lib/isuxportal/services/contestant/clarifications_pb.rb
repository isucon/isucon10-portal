# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/services/contestant/clarifications.proto

require 'google/protobuf'

require 'isuxportal/resources/clarification_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/services/contestant/clarifications.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.services.contestant.ListClarificationsRequest" do
    end
    add_message "isuxportal.proto.services.contestant.ListClarificationsResponse" do
      repeated :clarifications, :message, 1, "isuxportal.proto.resources.Clarification"
    end
    add_message "isuxportal.proto.services.contestant.RequestClarificationRequest" do
      optional :question, :string, 1
    end
    add_message "isuxportal.proto.services.contestant.RequestClarificationResponse" do
      optional :clarification, :message, 1, "isuxportal.proto.resources.Clarification"
    end
  end
end

module Isuxportal
  module Proto
    module Services
      module Contestant
        ListClarificationsRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.contestant.ListClarificationsRequest").msgclass
        ListClarificationsResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.contestant.ListClarificationsResponse").msgclass
        RequestClarificationRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.contestant.RequestClarificationRequest").msgclass
        RequestClarificationResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.contestant.RequestClarificationResponse").msgclass
      end
    end
  end
end