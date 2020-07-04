# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: isuxportal/services/common/me.proto

require 'google/protobuf'

require 'isuxportal/resources/team_pb'
require 'isuxportal/resources/contestant_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("isuxportal/services/common/me.proto", :syntax => :proto3) do
    add_message "isuxportal.proto.services.common.GetCurrentSessionRequest" do
    end
    add_message "isuxportal.proto.services.common.GetCurrentSettionResponse" do
      optional :team, :message, 1, "isuxportal.proto.resources.Team"
      optional :contestant, :message, 2, "isuxportal.proto.resources.Contestant"
      optional :discord_invitation_url, :string, 3
    end
  end
end

module Isuxportal
  module Proto
    module Services
      module Common
        GetCurrentSessionRequest = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.common.GetCurrentSessionRequest").msgclass
        GetCurrentSettionResponse = ::Google::Protobuf::DescriptorPool.generated_pool.lookup("isuxportal.proto.services.common.GetCurrentSettionResponse").msgclass
      end
    end
  end
end