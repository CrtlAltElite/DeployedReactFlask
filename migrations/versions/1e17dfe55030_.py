"""empty message

Revision ID: 1e17dfe55030
Revises: 18ec27fe0f2b
Create Date: 2021-11-03 20:39:02.236335

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1e17dfe55030'
down_revision = '18ec27fe0f2b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('is_admin', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'is_admin')
    # ### end Alembic commands ###
