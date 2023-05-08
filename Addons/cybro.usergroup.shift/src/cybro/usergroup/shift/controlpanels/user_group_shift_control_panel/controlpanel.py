# from Products.CMFCore.utils import getToolByName
from cybro.usergroup.shift import _
from cybro.usergroup.shift.interfaces import ICybroUsergroupShiftLayer
from plone.app.registry.browser.controlpanel import ControlPanelFormWrapper
from plone.app.registry.browser.controlpanel import RegistryEditForm
from plone.restapi.controlpanels import RegistryConfigletPanel
from plone.z3cform import layout
from zope.component import adapter
from zope.interface import Interface
from zope.interface import implementer
from zope import schema
from z3c.form import button
from plone import api


class IUserGroupShiftControlPanel(Interface):
    group = schema.Choice(
        title='Group',
        vocabulary='plone.app.vocabularies.Groups',
        required=False,
    )

    users = schema.List(
        title=_('Users'),
        value_type=schema.Choice(
            vocabulary='plone.app.vocabularies.Users'
        ),
        required=False,
    )


@implementer(IUserGroupShiftControlPanel)
class UserGroupShiftControlPanel(RegistryEditForm):
    schema = IUserGroupShiftControlPanel
    schema_prefix = "cybro.usergroup.shift.user_group_shift_control_panel"
    label = "Multi User Group Shifter"

    @button.buttonAndHandler('Save', name='save')
    def handleSave(self, _action):
        data, errors = self.extractData()
        if errors:
            self.status = self.formErrorsMessage
            return

        self.applyChanges(data)
        self.status = "Changes saved."

    @button.buttonAndHandler('Cancel', name='cancel')
    def handleCancel(self, action):
        super().handleCancel(self, action)

    @button.buttonAndHandler('Add to Group', name='Add to Group')
    def handleAdd(self, _action):
        data, errors = self.extractData()
        if errors:
            self.status = self.formErrorsMessage
            return

        selected_group = data['group']
        selected_users = data['users']
        if selected_group == None:
            self.status = "Please select a group"
        else:
            # Fetch the Plone users and groups tool
            # portal = api.portal.get()
            pt = api.portal.get_tool(name='portal_groups')

            # Change the group membership for each selected user
            for user in selected_users:
                user = api.user.get(username=user)
                group = pt.getGroupById(selected_group)
                group.addMember(user.getId())

            self.status = "Selected users group membership has been updated"

    @button.buttonAndHandler('Remove', name='remove')
    def handleRemove(self, action):
        data, errors = self.extractData()
        if errors:
            self.status = self.formErrorsMessage
            return

        selected_group = data['group']
        selected_users = data['users']
        if selected_group == None:
            self.status = "Please select a group"
        # Fetch the Plone users and groups tool
        # portal = api.portal.get()
        pt = api.portal.get_tool(name='portal_groups')

        # Remove the group membership for each selected user
        for user in selected_users:
            user = api.user.get(username=user)
            group = pt.getGroupById(selected_group)
            group.removeMember(user.getId())

        self.status = "Selected Users have been removed from the group."


UserGroupShiftControlPanelView = layout.wrap_form(
    UserGroupShiftControlPanel, ControlPanelFormWrapper
)



@adapter(Interface, Interface)
class UserGroupShiftControlPanelConfigletPanel(RegistryConfigletPanel):
    """TBD"""
    """Volto control panel"""

    # schema = IUserGroupShiftControlPanel
    # schema_prefix = "cybro.usergroup.shift.user_group_shift_control_panel"
    # configlet_id = "user_group_shift_control_panel-controlpanel"
    # configlet_category_id = "Products"
    #
    # title = "Multi User Shift"
    # group = "plone-users"

